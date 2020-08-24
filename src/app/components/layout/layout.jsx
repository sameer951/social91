import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DashboardOutlined,
    DatabaseOutlined,
    HistoryOutlined
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
class LayoutComponet extends React.Component {
    state = {
        collapsed: true,
        // menuIndex: 0
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    menuList = [
        // {
        //     label: 'Dashboard',
        //     route: '/dashboard',
        //     icon: <DashboardOutlined />
        // },
        {
            label: 'Payloads',
            route: '/payloads',
            icon: <DatabaseOutlined />
        },
        {
            label: 'History',
            route: '/history',
            icon: <HistoryOutlined />
        }
    ];
    componentDidMount() {
        let menuIndex = this.menuList.findIndex(menu => menu.route === this.props.location.pathname);
        console.log('location==>props', this.props, menuIndex, this.props.location.pathname.split('/'));
        this.setState({ menuIndex });
    }

    render() {
        let menuIndex = this.menuList.findIndex(menu => menu.route === this.props.location.pathname);
        return <React.Fragment>
            <Layout theme="light" style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['menuItem' + menuIndex]} mode="inline">
                        {this.menuList.map((menu, index) =>
                            <Menu.Item key={"menuItem" + index}
                                onClick={() => {
                                    let path = menu.route || '';
                                    this.props.history.push(path);
                                    console.log('menu', menu)
                                }}
                                icon={menu.icon}>
                                {menu.label}
                            </Menu.Item>)}

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>SpaceX</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.menuList?.[menuIndex]?.label || this.props.location.pathname.split('/')[1]}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Social91 - SpaceXData by Jyotikanta( +91 8270820320 )</Footer>
                </Layout>
            </Layout>
        </React.Fragment>
    }
}

export const LayoutComp = withRouter(LayoutComponet);