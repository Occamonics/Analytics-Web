import React from 'react';
import {Alert, Breadcrumb, Table} from "antd";
import type {ColumnsType} from 'antd/es/table';
import {CloudDownloadOutlined, DeleteOutlined} from "@ant-design/icons";

interface DataType {
    key: React.Key;
    startDate: string;
    endDate: string;
}

const columns: ColumnsType<DataType> = [
    {title: 'Start Date', dataIndex: 'startDate', key: 'startDate'},
    {title: 'End Date', dataIndex: 'endDate', key: 'endDate'},
    {
        title: 'Delete',
        dataIndex: '',
        key: 'x',
        render: () =><a> <DeleteOutlined /></a>,
    },
    {
        title: 'Download',
        dataIndex: '',
        key: 'y',
        render: () => <a> <CloudDownloadOutlined />  </a>,
    },
];

const data: DataType[] = [
    {
        key: 1,
        startDate: "05-09-2023",
        endDate: "12-09-2023"
    },
    {
        key: 2,
        startDate: "13-09-2023",
        endDate: "20-09-2023"
    },
    {
        key: 3,
        startDate: "21-09-2023",
        endDate: "28-09-2023"
    },
]

const Logs = () => {
    return (
        <div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>Logs</Breadcrumb.Item>
            </Breadcrumb>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

export default Logs;
