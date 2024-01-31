import React from 'react';
import {Modal, Table, Tabs} from "antd";
import {CopyOutlined, TableOutlined} from "@ant-design/icons";
import {JsonViewer} from "@textea/json-viewer";

type propsType = {
    // title: string;
    isModalOpen: boolean;
    handleCancel: any;
    content: React.ReactNode;
    data: any
}
const JsonModal = ({isModalOpen, handleCancel, content, data}: propsType) => {
    return (
        <Modal title={"Raw Data"} open={isModalOpen} onCancel={handleCancel} footer={null}>

            <Tabs
                defaultActiveKey="1"
                items={[
                    {
                        label: <span><TableOutlined/>TABLE</span>,
                        key: "1",
                        children: content
                    },
                    {
                        label: <span><CopyOutlined/>RAW</span>,
                        key: "2",
                        children: <JsonViewer value={data}/>
                    }
                ]}/>
        </Modal>
    );
};

export default JsonModal;