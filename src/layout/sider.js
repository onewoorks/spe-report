import React from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, DashboardOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const { Sider } = Layout
const { SubMenu } = Menu

const AppSider = (props) => {
    const [openKey, setOpenKey] = React.useState([props.current_openkey])
    const change_route = (e) => {
        props.handleChangeRoute(e.key)
    }
    const closeOpenKey = () => setOpenKey([])
    const onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(
            (key) => openKey.indexOf(key) === -1
        )
        setOpenKey([latestOpenKey])
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
                <div className="logo">SPE STOK REPORT</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={props.current_route}
                    openKeys={openKey}
                    onOpenChange={onOpenChange}
                    onClick={(e) => change_route(e)}
                >
                    <Menu.Item key="dashboard" onClick={closeOpenKey}>
                        <Link to="/">
                            <DashboardOutlined />
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="200"
                        icon={<UserOutlined />}
                        title="Stok Emas Baru"
                    >
                        <Menu.Item key="204">
                            <Link to="/stok/stok-akhir">Stok Akhir</Link>
                        </Menu.Item>
                        <Menu.Item key="201">
                            <Link to="/stok/stok-daftar">
                                Tarikh Pendaftaran
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="202">
                            <Link to="/stok/stok-jual">Telah Jual</Link>
                        </Menu.Item>
                        <Menu.Item key="203">
                            <Link to="/stok/stok-buang">Buang</Link>
                        </Menu.Item>
                        <Menu.Item key="205">
                            <Link to="/stok/stok-invois-belian">Invois Belian</Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="emas-lama"
                        icon={<UserOutlined />}
                        title="Stok Emas Lama"
                    >
                        <Menu.Item key="emas-lama-akhir">
                            <Link to="/stok/emas-lama-akhir">Stok Akhir</Link>
                        </Menu.Item>
                        <Menu.Item key="emas-lama-daftar">
                            <Link to="/stok/emas-lama-daftar">
                                Tarikh Pendaftaran
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="emas-lama-jual">
                            <Link to="/stok/emas-lama-jual">Telah Jual</Link>
                        </Menu.Item>
                        <Menu.Item key="emas-lama-buang">
                            <Link to="/stok/emas-lama-buang">Buang</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="300"
                        icon={<UserOutlined />}
                        title="Transaksi"
                    >
                        <Menu.Item key="301">Aliran Wang</Menu.Item>
                        <Menu.Item key="302">Tempahan</Menu.Item>
                        <Menu.Item key="303">Jualan</Menu.Item>
                        <Menu.Item key="304">Belian Emas Buruk</Menu.Item>
                        <Menu.Item key="305">Jualan Emas Buruk</Menu.Item>
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
        current_openkey: state.globalReducer.current_openkey,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeRoute: (key) =>
            dispatch({ type: 'CURRENT_ROUTE', route_key: key }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppSider)
