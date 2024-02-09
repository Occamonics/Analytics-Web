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
        const index = intents.findIndex(intent => item.user_intent === intent);
        if(!item.user_intent)
            return
        if(index === -1)
            intents.push(item.user_intent);
    })

    const stats: IIntentResolution[] = [];
    intents.forEach(intent => {
        const sum = data.filter(item => item.user_intent === intent).length;
        const satisfactory = data.filter(item => item.user_intent === intent && item.result === "Satisfactory").length;
        const unsatisfactory = data.filter(item => item.user_intent === intent && item.result !== "Satisfactory").length;
        stats.push({
            intent,
            sum,
            satisfactory,
            unsatisfactory
        })
    })
    return stats;
}

export const getUserSatisfaction = (data: IAnalysis[]) => {

}