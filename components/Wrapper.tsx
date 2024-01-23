import React from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import SideBar from "./SideBar";

const {Content} = Layout;


const Wrapper = ({children}: { children: React.ReactNode }) => {

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout>
            {/*<Header style={{ display: 'flex', alignItems: 'center' }}>*/}
            {/*    <div className="demo-logo" />*/}
            {/*    /!*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />*!/*/}
            {/*</Header>*/}
            <Content style={{ background: colorBgContainer}}>
                {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                <Layout style={{padding: '24px 0', background: colorBgContainer}}>
                    <SideBar/>
                    <Content style={{padding: '0 24px', minHeight: 280}}>
                        <main>
                            {children}
                        </main>
                    </Content>
                </Layout>
            </Content>
            {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>*/}
        </Layout>
    );
};

export default Wrapper;
