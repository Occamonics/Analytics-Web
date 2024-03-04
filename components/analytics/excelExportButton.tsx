import React from 'react';
import {IAnalysis} from "../../lib/interfaces/analysis.interface";
import * as XLSX from 'xlsx';
import {Button} from "antd";
import {FileExcelOutlined} from "@ant-design/icons";
import { saveAs } from 'file-saver';
import {formatUnixTimestamp} from "../../lib/helpers";
import * as _ from "lodash";

type propType = {
    data: IAnalysis[] | null;
}


const handleExportClick = (data: IAnalysis[] | null) => {
    if(!data)
        return

    const refactored = data.map(item => {
        let dialogue = "";
        item.conversation.forEach(con => {
            dialogue += 'USER:\n' + con.USER + '\n-----------\n' +'BOT:\n' + con.BOT + '\n-----------\n'
        })
        const TS = formatUnixTimestamp(item.TIMESTAMP)
        return {...item, dialogue, TS}
    })

    const whitelist = ["key", "USER_ID", "USER_UTTERANCE", "INTENT", "TS", "BOT_NAME", "CHANNEL_SESSION_ID", "result", "issue_type", "notes", "dialogue", "status","country"];
    const filtered = _.map(refactored, (obj:any) => _.pick(obj, whitelist));
    const worksheet = XLSX.utils.json_to_sheet(filtered);
    for (let rowIndex = 2; rowIndex <= filtered.length; rowIndex++) {
        let cell = 'C' + rowIndex; // assuming USER_UTTERANCE is column C
        if (worksheet[cell]) {
            worksheet[cell].c = [{a: "Occamonics", t: filtered[rowIndex - 2].dialogue}];
        }
    }
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Buffer to store the generated Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

    saveAs(blob, "data.xlsx");
};


const ExcelExportButton = ({data}: propType) => {
    return (
        <Button
            onClick={() => handleExportClick(data)}
            style={{float: 'right'}}
            icon={<FileExcelOutlined/>}
            className="excel-export-button"
        />
    );
};

export default ExcelExportButton;
