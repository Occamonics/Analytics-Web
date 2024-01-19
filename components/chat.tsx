import React from 'react';
import {Alert, Col, Divider, List, Row} from "antd";


export  type ConversationType = {
    userId: string;
    country: string;
    conversation : {
        USER_UTTERANCE: string;
        BOT_RESPONSE: string;
        INTENT: string;
        TIMESTAMP: number;
        CHANNEL_SESSION_ID: string;
        BOT_NAME: string;
    }[]
}


type PropType = {
    data : ConversationType,
    intent: string | null
}
const Chat = ({data, intent}: PropType) => {
    return (
        <div>
            <Alert message={`User ${data?.userId?? ""} -- Country ${data?.country?? ""}`} type={"success"}/>
            <Divider/>
            <List
                dataSource={data.conversation}
                renderItem={(item) => (
                    <>
                        <List.Item>
                            <List.Item.Meta
                                description={
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={12}
                                             style={{color : "black"}}
                                        >
                                            {item.USER_UTTERANCE}
                                        </Col>
                                        <Col className="gutter-row" span={12}
                                        >
                                            {formatUnixTimestamp(item.TIMESTAMP)}
                                        </Col>
                                    </Row>
                                }
                            />
                        </List.Item>
                        <List.Item>
                            <List.Item.Meta
                                description={
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={12}>
                                            {formatUnixTimestamp(item.TIMESTAMP)}
                                            <br/>
                                            {item.BOT_NAME}
                                            <br/>
                                            {item.INTENT == intent ?  <b style={{color : "red"}}>{item.INTENT}</b> : item.INTENT }
                                        </Col>
                                        <Col className="gutter-row" span={12} style={{color : "black"}}>
                                            <div
                                                dangerouslySetInnerHTML={{__html: item.BOT_RESPONSE.replace(/\n/g, '<br/>')}}/>
                                        </Col>
                                    </Row>
                                }
                            />
                        </List.Item>
                    </>

                )}
            />
        </div>

    );
};

export default Chat;


function formatUnixTimestamp(unixTimestamp : number) {
    const date = new Date(unixTimestamp); // Convert seconds to milliseconds
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}`;
}
