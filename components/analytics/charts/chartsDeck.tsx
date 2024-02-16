import React from 'react';
import {Tabs} from "antd";
import ResolutionRate from "./resolutionRate";
import {IAnalysis} from "../../../lib/interfaces/analysis.interface";
import {
    calculateResolutionRate,
    getResolutionByIntent,
    getReturnedUsers,
    getSessionsPerCountry
} from "../../../lib/helpers";
import TopIntent from "./topIntents";
import {ReturnedUsers} from "./returnedUsers";
import SessionsPerCountry from "./sessionsPerCountry";

type propType = {
    data: IAnalysis[];
}
const ChartsDeck = ({data} : propType) => {
    return (
        <Tabs
            items={
                [
                    {
                        label: "Resolution",
                        key: "1",
                        children: <ResolutionRate resultPercentages={calculateResolutionRate(data)} />
                    },
                    {
                        label: "Top Intents",
                        key: "2",
                        children: <TopIntent intentsResolution={getResolutionByIntent(data)}/>
                    },
                    {
                        label: "Return Visits",
                        key: "3",
                        children: <ReturnedUsers userReturns={getReturnedUsers(data)}/>
                    },
                    {
                        label: "Sessions Per Country",
                        key: "4",
                        children: <SessionsPerCountry spc={getSessionsPerCountry(data)}/>
                    },
                    {
                        label: "Percentage Per Country",
                        key: "5",
                        children: <></>
                    }
                ]
            }
        />
    );
};

export default ChartsDeck;
