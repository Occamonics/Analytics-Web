import React, {useEffect, useState} from 'react';
import {getDailySessions} from "../../lib/api/insights.api";
import {Bar} from "react-chartjs-2";
import {Chart, CategoryScale, LinearScale, ArcElement, LineElement, PointElement, BarElement} from 'chart.js';
import {Breadcrumb, FloatButton, Popover, Table} from "antd";
import {
    CommentOutlined,
    CustomerServiceOutlined,
    InfoCircleOutlined,
    SettingOutlined
} from '@ant-design/icons';
import JsonModal from "../../components/JsonModal";
import type {ColumnsType} from 'antd/es/table';

Chart.register(CategoryScale, LinearScale, ArcElement, LineElement, PointElement, BarElement);


const DailySessions = () => {

    const [rawData, setRawData] = useState<any>({});
    const [data, setData] = useState<any>({
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [],
            borderWidth: 1
        }]
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const {success, data, message} = await getDailySessions();
            if (success) {
                setRawData(data);
                const labels = Object.keys(data);
                const values = Object.values(data);
                setData({
                    labels,
                    datasets: [{
                        label: message,
                        data: values,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                    }],
                    borderWidth: 1
                });
            } else {
                setData({});
                setRawData({});
            }
        }
        fetchData();
    }, []);


    return (
        <div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Analysis</Breadcrumb.Item>
                <Breadcrumb.Item>Daily Sessions</Breadcrumb.Item>
            </Breadcrumb>
            <Bar
                data={data}
                // width={50}
                // height={10}
                // options={{
                //     // maintainAspectRatio: false
                // }}
            />

            <FloatButton.Group
                trigger="hover"
                type="primary"
                style={{right: 24}}
                icon={<CustomerServiceOutlined/>}
            >
                <FloatButton icon={<CommentOutlined/>}/>
                <Popover
                    placement="left"
                    title={'Settings'}
                    content={<div><p>Content</p></div>}
                    trigger="click"
                >
                    <FloatButton icon={<SettingOutlined/>}/>
                </Popover>
                <FloatButton icon={<InfoCircleOutlined/>} onClick={showModal}/>
            </FloatButton.Group>

            <JsonModal
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                content={buildDailySessionModal({data: rawData})}
                data={rawData}
            />
        </div>
    );
};

export default DailySessions;

interface DataType {
    date: string;
    value: number;
}

const buildDailySessionModal = ({data}: any) => {
    const tableData:DataType[] = Object.entries(data).map(([date, value]) => ({
        date,
        value : Number(value)
    }));

    const columns: ColumnsType<DataType> = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Sessions',
            dataIndex: 'value',
            key: 'sessions',
        }
    ];

    return <>
        <Table columns={columns} dataSource={tableData}/>
    </>;
}
