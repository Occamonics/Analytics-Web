import React from 'react';
import {Input, Select, Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import ConversationTimeLine from "./conversationTimeLine";
import UserUtteranceDisplay from "./userUtteranceDisplay";
import {IAnalysis, ISSUE_TYPE, RESULT} from "../../lib/interfaces/analysis.interface";
import {formatUnixTimestamp} from "../../lib/helpers";

import intents from "../../lib/data/intents.json";

type propType = {
    analysis: IAnalysis[];
    updateHandler: any;
}


const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
const ConversationDesign = ({analysis, updateHandler}: propType) => {

    const columns: ColumnsType<IAnalysis> = [
        {
            title: "Key",
            key: "key",
            dataIndex: "key",
            filters: analysis.map(e => {
                return {text: e.key.toString(), value: e.key}
            }),
            filterSearch: true,
            onFilter: (value, record) => record.USER_ID == value,
        },

        {
            title: "User ID",
            key: "USER_ID",
            dataIndex: "USER_ID",
            sorter: (a, b) => a.USER_ID.localeCompare(b.USER_ID),
            render: value => value.replace(/_.*/, ''),
            filters: analysis.filter((value, index, self) =>
                self.findIndex(item => item.USER_ID === value.USER_ID) === index
            ).map(e => {
                return {text: e.USER_ID.replace(/_.*/, ''), value: e.USER_ID}
            }),
            filterSearch: true,
            onFilter: (value, record) => record.USER_ID.includes(value as string),
        },
        {
            title: "User Utterance",
            key: "USER_UTTERANCE",
            dataIndex: "USER_UTTERANCE",
            sorter: (a, b) => a.USER_UTTERANCE.localeCompare(b.USER_UTTERANCE),
            render: value => <UserUtteranceDisplay text={value} maxWordsPerLine={6}/>,
        },
        {
            title: "Intent",
            key: "INTENT",
            dataIndex: "INTENT",
            sorter: (a, b) => a.INTENT.localeCompare(b.INTENT),
            filters: analysis.filter((value, index, self) =>
                self.findIndex(item => item.SKILL === value.SKILL && item.INTENT === value.INTENT) === index
            ).map(e => {
                return {text: e.INTENT, value: e.INTENT}
            }),
            filterSearch: true,
            onFilter: (value, record) => record.INTENT.includes(value as string),
        },
        {
            title: "Skill",
            key: "SKILL",
            dataIndex: "SKILL",
            sorter: (a, b) => a.INTENT.localeCompare(b.INTENT),
            filters: analysis.filter((value, index, self) =>
                self.findIndex(item => item.SKILL === value.SKILL) === index
            ).map(e => {
                return {text: e.SKILL, value: e.SKILL}
            }),
            filterSearch: true,
            onFilter: (value, record) => record.SKILL.includes(value as string),
        },
        {
            title: "TIMESTAMP",
            key: "TIMESTAMP",
            dataIndex: "TIMESTAMP",
            sorter: (a, b) => a.TIMESTAMP - b.TIMESTAMP,
            render: (value) => formatUnixTimestamp(value)
        },

        {
            title: "Result",
            key: "result",
            dataIndex: "result",
            render: (value, record) => <Select
                value={value}
                showSearch
                placeholder="result"
                filterOption={filterOption}
                options={Object.entries(RESULT).map(([key, value]) => ({
                    label: value,
                    value: value,
                }))}
                onChange={(value) => updateHandler(record.key, "result", value)}
            />,
            filters: Object.entries(RESULT).map(([key, value]) => ({
                text: value,
                value: value,
            })),
            filterSearch: true,
            onFilter: (value, record) => record.result.includes(value as string),
        },
        {
            title: "Issue Type",
            key: "issue_type",
            dataIndex: "issue_type",
            render: (value, record) => <Select
                showSearch
                placeholder="issue_type"
                filterOption={filterOption}
                options={Object.entries(ISSUE_TYPE).map(([key, value]) => ({
                    label: value,
                    value: value,
                }))}
                onChange={(value) => {
                    updateHandler(record.key, "issue_type", value)
                }}
                disabled={record.result == RESULT.SATISFACTORY}
                value={value}
            />
        },
        {
            title: "User Intent",
            key: "user_intent",
            dataIndex: "user_intent",
            render: (value, record) => {
                if (record.result == RESULT.SATISFACTORY)
                    return <div>{value}</div>
                else
                    return <Select
                        showSearch
                        placeholder={"select user intent"}
                        value={value}
                        onChange={(value) => {
                            updateHandler(record.key, "user_intent", value)
                        }}
                        options={intents.map((el) => {
                            return {
                                label: el.intent,
                                value: el.intent,
                            }
                        })}
                    />
            }
        },
        {
            title: "Associated Skill",
            key: "associated_skill",
            dataIndex: "associated_skill",
        },
        {
            title: "Notes",
            key: "notes",
            dataIndex: "notes",
            render: (value, record) => {
                return <Input
                    value={value}
                    onChange={(e) => updateHandler(record.key, "notes", e.target.value)}
                />
            }
        },
        // {
        //     title: "First Visit",
        //     key: "first_visit",
        //     dataIndex: "first_visit",
        // },
        // {
        //     title: "First Visit On Day",
        //     key: "first_visit_on_day",
        //     dataIndex: "first_visit_on_day",
        // },
        // {
        //     title: "Number of Visits",
        //     key: "num_visits",
        //     dataIndex: "num_visits",
        //     sorter: (a, b) => a.num_visits - b.num_visits,
        // }
    ]


    return (
        <Table
            columns={columns}
            dataSource={analysis}
            scroll={{x: 'max-content'}}
            expandable={{
                expandedRowRender: (record) => <ConversationTimeLine conversation={record.conversation}/>
            }}
        />
    );
}

export default ConversationDesign;
