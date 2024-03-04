import {IAnalysis} from "./interfaces/analysis.interface";
import {IIntentResolution} from "../components/analytics/charts/topIntents";

export const  formatUnixTimestamp = (unixTimestamp:number):string => {
    // Create Date object from Unix timestamp
    const date = new Date(unixTimestamp); // Unix timestamp is in seconds

    // Format date and time
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    // Return formatted date and time
    return day + '-' + month + '-' + year + ' ' + hours + ':' + minutes;
}


export function calculateResolutionRate(data: IAnalysis[]) {
    let resultCounts: { [key: string]: number } = {
        Incorrect: 0,
        Satisfactory: 0,
        "Needs Improvement": 0,
        // "ToDo": 0
    };

    for (let i = 0; i < data.length; i++) {
        if (data[i].result) {
            resultCounts[data[i].result]++;
        // } else {
        //     resultCounts["ToDo"]++;
        }
    }

    let totalResults = data.length;
    let resultPercentages: { [key: string]: number } = {
        Incorrect: (resultCounts["Incorrect"] / totalResults) * 100,
        Satisfactory: (resultCounts["Satisfactory"] / totalResults) * 100,
        "Needs Improvement": (resultCounts["Needs Improvement"] / totalResults) * 100,
        // ToDo: (resultCounts["ToDo"] / totalResults) * 100
    };

    return resultPercentages;
}


export const getResolutionByIntent = (data: IAnalysis[]) => {
    const intents : string[] = [];
    data.forEach(item => {
        const index = intents.findIndex(intent => item.INTENT === intent);
        if(!item.INTENT)
            return
        if(index === -1)
            intents.push(item.INTENT);
    })

    const stats: IIntentResolution[] = [];
    intents.forEach(intent => {
        const sum = data.filter(item => item.INTENT === intent).length;
        const satisfactory = data.filter(item => item.INTENT === intent && item.result === "Satisfactory").length;
        const unsatisfactory = data.filter(item => item.INTENT === intent && item.result !== "Satisfactory").length;
        stats.push({
            intent,
            sum,
            satisfactory,
            unsatisfactory
        })
    })
    return stats;
}

export const getReturnedUsers = (data: IAnalysis[]) => {

    const filtered = data.map(i => {
        return {userId: i.USER_ID.replace(/_.*/, ''), timestamp: i.TIMESTAMP };
    });
    filtered.sort((a, b) => a.timestamp - b.timestamp);


    // 2. Group the data by date and count first time users
    let firstTimeLogins: {
        date: string;
        firstTimeLogin:number;
        repeatedLogin:number;
        returnedLogin:number;
        totalLogins:number;
    } []= [];
    let userFirstLogin : any = {};
    let dateIndex : any = {};
    let userLoginDate: any = {};
    let userLoginTime: any = {};

    for (let i = 0; i < filtered.length; i++) {
        // Convert timestamp to date (only year, month, day)
        const date = new Date(filtered[i].timestamp);
        date.setHours(0, 0, 0, 0);
        // date.setDate(1);
        const formattedDate = formatDate(date);

        if (dateIndex[formattedDate] === undefined) {
            dateIndex[formattedDate] = firstTimeLogins.length;
            firstTimeLogins.push({ date: formattedDate, firstTimeLogin: 0, repeatedLogin: 0, returnedLogin: 0, totalLogins: 0 });
        }

        // If this is the first login of the user, increment the counter
        if (!userFirstLogin[filtered[i].userId]) {
            userFirstLogin[filtered[i].userId] = true;
            userLoginDate[filtered[i].userId] = formattedDate;
            userLoginTime[filtered[i].userId] = filtered[i].timestamp;

            firstTimeLogins[dateIndex[formattedDate]].firstTimeLogin++;
            firstTimeLogins[dateIndex[formattedDate]].totalLogins++;
        } else {
            if (userLoginDate[filtered[i].userId] === formattedDate && (filtered[i].timestamp - userLoginTime[filtered[i].userId]) >= 3600000) {
                // Check if user has logged in again on the same day after at least 1 hour
                firstTimeLogins[dateIndex[formattedDate]].repeatedLogin++;
                userLoginTime[filtered[i].userId] = filtered[i].timestamp; // Update login time
            } else if (userLoginDate[filtered[i].userId] !== formattedDate) {
                // Check if user has logged in again on a different day
                userLoginDate[filtered[i].userId] = formattedDate;
                userLoginTime[filtered[i].userId] = filtered[i].timestamp; // Update login time
                firstTimeLogins[dateIndex[formattedDate]].returnedLogin++;
                firstTimeLogins[dateIndex[formattedDate]].totalLogins++;
            }
        }
    }
    return {
        "labels": firstTimeLogins.map(i => i.date),
        "firstTimeData": firstTimeLogins.map(i => i.firstTimeLogin),
        "returnedData": firstTimeLogins.map(i => i.returnedLogin)
    }
}


// Helper function to format date as 'dd-mm'
function formatDate(date: Date) {
    let day = '' + date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return [day, month].join(' ');
    // return [month, year].join(' ');
}

export const getSessionsPerCountry = (data: IAnalysis[]) => {
    // Extracting country labels
    const countryLabels = data.map(item => item.country);

// Counting occurrences of each country
    const countryCounts = countryLabels.reduce((counts:any, country:any) => {
        counts[country] = (counts[country] || 0) + 1;
        return counts;
    }, {});

// Converting the counts object into an array of objects
    const countryCountArray = Object.entries(countryCounts).map(([country, count]) => ({
        country,
        count,
    }));
    return {
        countries: countryLabels,
        sessions: countryCountArray
    }
}
