import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
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
    props;
    onCollapse = collapsed => {
        console.log(this.state?.collapsed);
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
            <Layout theme="light" style={{ minHeight: "100vh" }}>
                <Sider style={{ position: "fixed", top: "0px", height: "100vh", zIndex: "12500" }}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                        this.onCollapse(collapsed);
                    }}>
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
                <Layout >
                    <Content style={{ margin: '24px 16px 0', marginLeft: this.state?.collapsed ? '24px' : '224px' }}>
                        <div style={{ padding: 24, minHeight: 360 }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>SpaceX</Breadcrumb.Item>
                                <Breadcrumb.Item>{this.menuList?.[menuIndex]?.label || this.props.location.pathname.split('/')[1]}</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                {this.props.children}
                            </div>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Social91 - SpaceXData by Jyotikanta( +91 8270820320 )</Footer>
                </Layout>
            </Layout>
        </React.Fragment>
    }
}

export const LayoutComp = withRouter(LayoutComponet);