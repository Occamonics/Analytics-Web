import React from 'react';
import {ColumnsType} from "antd/es/table";
import {Table} from "antd";
import {TableRowSelection} from "antd/es/table/interface";


interface DataType {
    intent: string;
    skill: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Skill",
        dataIndex: "skill",
        key: "skill",
        sorter: (a, b) => a.skill.localeCompare(b.skill)
    },
    {
        title: "Intent",
        dataIndex: "intent",
        key: "intent",
        sorter: (a, b) => a.intent.localeCompare(b.intent)

    }
];



type propType = {
    data: DataType[];
}
const References = ({data} : propType) => {
    return (
        <Table columns={columns} dataSource={data} scroll={{ y: 'max-content' }}/>
    );
};

export default References;
