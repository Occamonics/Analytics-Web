import React, {useEffect, useState} from 'react';
import {Breadcrumb, Button, Divider, message, Space, Tabs, Upload} from "antd";
import ConversationDesign from "../../components/analytics/conversationDesign";
import {
    AntDesignOutlined,
    DotChartOutlined, DownloadOutlined,
    FileSearchOutlined,
    UploadOutlined
} from "@ant-design/icons";
import References from "../../components/analytics/references";
import {getAllConversations, getListOfIntents} from "../../lib/api/conversations.api";
import {Router} from "next/router";
import {RESULT} from "../../lib/interfaces/analysis.interface";

import intents from "../../lib/data/intents.json";
import ResolutionRate from "../../components/analytics/charts/resolutionRate";
import {calculateResultPercentages} from "../../lib/helpers";

const Analytics = () => {
    const [rawDataIntent, setRawDataIntent] = useState<any>([]);
    const [rawDataConversations, setRawDataConversations] = useState<any>([]);

    const updateData = (indexKey: number, key: string, newValue: any) => {
        const updatedData = [...rawDataConversations];
        const itemIndex = updatedData.findIndex(item => item.index === indexKey);
        if (itemIndex !== -1) {
            updatedData[itemIndex][key] = newValue;
        }
        if (updatedData[itemIndex].result === RESULT.SATISFACTORY) {
            updatedData[itemIndex].user_intent = updatedData[itemIndex].INTENT
        }
        if (updatedData[itemIndex].INTENT === updatedData[itemIndex].user_intent) {
            updatedData[itemIndex].associated_skill = updatedData[itemIndex].SKILL
        }
        const intentFound = intents.find(item => item.intent === updatedData[itemIndex].user_intent);
        updatedData[itemIndex].associated_skill = intentFound ? intentFound.skill : null;
        setRawDataConversations(updatedData);
        console.log(calculateResultPercentages(updatedData));
    };


    useEffect(() => {
        const fetchIntents = async () => {
            const {success, data, count} = await getListOfIntents();
            if (success) {
                setRawDataIntent(data);
            } else {
                setRawDataIntent([]);
            }
        }
        const fetchConversations = async () => {
            const {success, data, count} = await getAllConversations();
            if (success) {
                setRawDataConversations(data.map((e: any, index: number) => {
                    return {...e, index}
                }))
            } else {
                setRawDataConversations([]);
            }
        }
        // fetchIntents();
        // fetchConversations();

    }, []);

    const handleRouteChange = (url: any, {shallow}: any) => {
        if (window.confirm("Are you sure you want to leave this page?")) {
            // User confirmed, allow the route change
        } else {
            // User didn't confirm, halt the route change
            Router.events.emit('routeChangeError');
            throw 'Route cancelled.';
        }
    }

    useEffect(() => {
        Router.events.on('routeChangeStart', handleRouteChange)

        // Clean up the subscription
        return () => {
            Router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])


    const beforeUpload = (file: any) => {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            try {
                const parsedData = JSON.parse(e.target.result);
                setRawDataConversations(parsedData);
                message.success('File uploaded successfully!');
            } catch (error) {
                message.error('Error parsing JSON. Please upload a valid JSON file.');
            }
        };

        reader.readAsText(file);

        // Prevent default upload behavior
        return false;
    };

    const downloadJsonFile = () => {
        if (rawDataConversations) {
            const jsonContent = JSON.stringify(rawDataConversations, null, 2);
            const blob = new Blob([jsonContent], {type: 'application/json'});
            const url = URL.createObjectURL(blob);

            // Create a link element and trigger a click to download the file
            const link = document.createElement('a');
            link.href = url;
            link.download = 'analysis.json';
            link.click();
            // Revoke the object URL to free up resources
            URL.revokeObjectURL(url);
        } else {
            message.warning('No data to download. Please upload a JSON file first.');
        }
    };


    return (
        <div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Conversations</Breadcrumb.Item>
                <Breadcrumb.Item>Analytics</Breadcrumb.Item>
            </Breadcrumb>
            <Divider/>
            <Space>
                <Upload
                    beforeUpload={beforeUpload}
                    showUploadList={false}
                    accept=".json"
                >
                    <Button icon={<UploadOutlined/>}>Upload JSON</Button>
                </Upload>
                <Button
                    icon={<DownloadOutlined/>}
                    onClick={downloadJsonFile}
                >
                    Download JSON
                </Button>

            </Space>

            <Divider dashed/>
            <Tabs
                tabPosition={"right"}
                items={[
                    {
                        key: "conversation_design",
                        label: "",
                        children: <ConversationDesign analysis={rawDataConversations.map((e: any, i: any) => {
                            return {...e, key: i}
                        })} updateHandler={updateData}/>,
                        icon: <AntDesignOutlined/>,
                    },
                    {
                        key: "reference",
                        label: "",
                        children: <References data={intents.map((e, i) => {
                            return {...e, key: i}
                        })}/>,
                        icon: <FileSearchOutlined/>,
                    },
                    {
                        key: "charts",
                        label: "",
                        // @ts-ignore
                        children: <ResolutionRate resultPercentages={calculateResultPercentages(rawDataConversations)}/>,
                        icon: <DotChartOutlined/>,
                    },
                ]}
            />
        </div>
    );
};

export default Analytics;

