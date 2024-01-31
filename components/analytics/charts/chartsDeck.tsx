import React from 'react';
import {Tabs} from "antd";
import ResolutionRate from "./resolutionRate";
import {IAnalysis} from "../../../lib/interfaces/analysis.interface";
import {calculateResolutionRate, getResolutionByIntent} from "../../../lib/helpers";
import TopIntent from "./topIntents";

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
                ]
            }
        />
    );
};

export default ChartsDeck;