import React, {useEffect, useState} from 'react';
import {Alert, Avatar, Button, Card, Carousel, Divider, List, Tooltip, Typography} from "antd";
import {getNegativeFeedbackConversations} from "../../lib/api/insights.api";

type ConversationType = {
    user_id: string;
    country: string;
    conversation : {
        BOT_NAME: string,
        TIMESTAMP: string;
        USER_UTTERANCE: string;
        BOT_RESPONSE: string;
        INTENT: string;
    }[]
}
const NegativeFeedback = () => {
    const [conversations, setConversations] = useState<ConversationType[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const {success, data, message} = await getNegativeFeedbackConversations();
            if (success) {
                setConversations(data)
            } else
                setConversations(null);
        }
        // fetchData();
    }, []);


    const data = [
        {
            sender: "User 1",
            message: "Hello, how are you?",
            timestamp: "12:00 PM",
        },
        {
            sender: "User 2",
            message: "I'm doing well, thanks for asking!",
            timestamp: "12:01 PM",
        },
        {
            sender: "User 1",
            message: "What are you up to today?",
            timestamp: "12:02 PM",
        },
        {
            sender: "User 2",
            message: "I'm working on a new project.",
            timestamp: "12:03 PM",
        },
    ];

    return (
        <div className="App">
            <Card
                title="Negative feedback"
                style={{width: 400, height: 600, overflowY: "auto"}}
            >
                {
                    conversations ?
                        <div>
                            <Carousel dotPosition={"bottom"}>
                                {
                                    conversations.map((conv,index) => (
                                        <div key={index}>
                                            <Alert message={conv.user_id + "--" + conv.country} type="info" />
                                            <List
                                                dataSource={conv.conversation}
                                                renderItem={(message) => (
                                                    <>
                                                        {message.USER_UTTERANCE &&
                                                            <List.Item
                                                                style={{
                                                                    flexDirection: "row",
                                                                }}
                                                            >
                                                                <Tooltip
                                                                    title={message.BOT_NAME + "--" + message.INTENT}
                                                                    placement="right"
                                                                >
                                                                    <Alert message={message.USER_UTTERANCE} type={message.INTENT == "feedback.negative" ? "error" : "warning"} />
                                                                </Tooltip>
                                                            </List.Item>
                                                        }
                                                        {message.BOT_RESPONSE &&
                                                            <List.Item
                                                                // style={{
                                                                //     flexDirection: "row",
                                                                // }}
                                                            >
                                                                <Tooltip
                                                                    title={message.BOT_NAME + "--" + message.INTENT}
                                                                    placement="right"
                                                                >
                                                                    <Alert message={message.BOT_RESPONSE} type="info" />
                                                                </Tooltip>
                                                            </List.Item>
                                                        }
                                                    </>
                                                )
                                            }
                                            />
                                        </div>

                                    ))
                                }
                            </Carousel>

                        </div>
                        :
                        <h2> 0 negative feedback !</h2>
                }
            </Card>
        </div>
    );
};

export default NegativeFeedback;
