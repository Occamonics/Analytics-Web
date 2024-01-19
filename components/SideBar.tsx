import React, {useState} from 'react';
import {
    Layout,
    Menu,
    MenuProps,
    theme,
    DatePicker
} from "antd";

import {
    CalendarOutlined,
    DotChartOutlined,
    LogoutOutlined, ProfileOutlined,
    SettingOutlined
} from '@ant-design/icons';


import {useRouter} from 'next/router'

const {Sider} = Layout;
const {RangePicker} = DatePicker;


const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const router = useRouter();

    const items: MenuProps['items'] = [
        // {
        //     icon: <ProfileOutlined/>,
        //     label: 'Profile',
        //     key: 'profile',
        //     danger: true
        // },
        {
            label: 'Analysis',
            key: 'sub1',
            icon: <DotChartOutlined/>,
            children: [
                // {
                //     label: <RangePicker format={"DD-MM"}/>,
                //     key: 'range',
                //     icon: <CalendarOutlined/>,
                // },
                // {
                //     label: 'Overview',
                //     key: 'g1',
                //     // disabled: true,
                //     // icon : <DotChartOutlined />,
                //     type: 'group',
                //     children: [
                //         {
                //             label: 'Daily Sessions',
                //             key: 'g1-1',
                //             onClick: () => router.push("/insights/dailySessions"),
                //         },
                //         {
                //             label: 'Top Intents',
                //             key: 'g1-2',
                //             onClick: () => router.push("/insights/topIntents"),
                //         },
                //         {
                //             label: 'Sessions Per Country',
                //             key: 'g1-3',
                //             onClick: () => router.push("/insights/sessionsPerCountry"),
                //         },
                //         {
                //             label: 'Percentage Per Country',
                //             key: 'g1-4',
                //             onClick: () => router.push("/insights/percentagePerCountry"),
                //         },
                //         {
                //             label: 'Resolution Rate',
                //             key: 'g1-5',
                //             onClick: () => router.push("/insights/resolutionRate"),
                //         }
                //     ]
                // },
                {
                    label: 'Conversations',
                    key: 'g2',
                    type: 'group',
                    children: [
                        // {
                        //     label: 'Display',
                        //     key: 'g2-1',
                        //     onClick: () => router.push("/conversations"),
                        // },
                        {
                            label: 'Analytics',
                            key: 'g2-2',
                            onClick: () => router.push("/conversations"),
                        },
                    ]
                }
            ]
        },


        {type: 'divider'},

        {
            // type: 'group',
            label: 'Admin',
            key: 'admin-group',
            icon: <SettingOutlined/>,
            children: [
                {
                    label: 'Logs',
                    key: 'admin-group-1',
                    onClick: () => router.push("/admin/logs"),
                }
            ]
        },

        {type: 'divider'},
        {
            label: 'Logout',
            key: 'logout',
            icon: <LogoutOutlined/>,
        },
    ];

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Sider
            style={{background: colorBgContainer}}
            width={300}
            collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
            theme={"light"}
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{height: '100%'}}
                items={items}
                selectable={true}
            />
        </Sider>
    );
};

export default SideBar;
