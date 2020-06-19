import React from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, DashboardOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const { Sider } = Layout
const { SubMenu } = Menu

const AppSider = (props) => {
    const change_route = (e) => {
        props.handleChangeRoute(e.key)
    }

    return (
        <>
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsible
                collapsedWidth="0"
                collapsed={props.collapsed_sider}
            >
                <div className="logo">Report</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={props.current_route}
                    onClick={(e) => change_route(e)}
                >
                    <Menu.Item key="1">
                        <Link to="/">
                            <DashboardOutlined />
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="stok" icon={<UserOutlined />} title="Stok">
                        <Menu.Item key="stok_simpanan">
                            <Link to="/stok/dalam-simpanan">
                                Dalam Simpanan
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="stok_telah_jual">
                            <Link to="/stok/telah-jual">Telah Jual</Link>
                        </Menu.Item>
                        <Menu.Item key="stok_buang">
                            <Link to="/stok/buang">Buang</Link>
                        </Menu.Item>
                        <Menu.Item key="stok_akhir">
                            <Link to="/stok/stok-akhir">Stok Akhir</Link>
                        </Menu.Item>
                        <Menu.Item key="stok_invoice">
                            <Link to="/stok/invois-belian">Invois Belian</Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="transaksi"
                        icon={<UserOutlined />}
                        title="Transaksi"
                    >
                        <Menu.Item key="transaksi_1">Aliran Wang</Menu.Item>
                        <Menu.Item key="transaksi_2">Tempahan</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        collapsed_sider: state.globalReducer.menu_collapsed,
        current_route: state.globalReducer.current_menu,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeRoute: (key) =>
            dispatch({ type: 'CURRENT_ROUTE', route_key: key }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppSider)
