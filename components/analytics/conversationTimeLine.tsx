import React from 'react';
import {RobotOutlined, UserOutlined} from '@ant-design/icons';
import {Timeline} from 'antd';
import {formatUnixTimestamp} from "../../lib/helpers";
import {IConversation} from "../../lib/interfaces/analysis.interface";

type propType = {
    conversation: IConversation[];
}
const ConversationTimeLine = ({conversation}: propType) => {
    const items: any[] = [];
    conversation.forEach(con => {
        items.push({
            label: formatUnixTimestamp(con.TIMESTAMP),
            children: <p
                dangerouslySetInnerHTML={{__html: con.USER.replace(/\n/g, '<br/>')}}/>,
            color: 'blue',
            dot:<UserOutlined />,
        });
        items.push({
            label: formatUnixTimestamp(con.TIMESTAMP),
            children: <p
                dangerouslySetInnerHTML={{__html: con.BOT.replace(/\n/g, '<br/>')}}/>,
            color: 'green',
            dot: <RobotOutlined />,
        });
    });


    return (
        <div>
            <Timeline
                mode="left"
                items={items}
            />
        </div>

    );
}

export default ConversationTimeLine;
