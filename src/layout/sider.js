import React from "react"
import { Layout, Menu, Icon } from "antd"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const { Sider } = Layout

class AppSider extends React.Component {
    change_route = e => {
        this.props.handleChangeRoute(e.key)
    }
    
    render() {
        return (
            <>
                <Sider
                    trigger={null}
                    breakpoint="lg"
                    collapsible
                    collapsedWidth="0"
                    collapsed={this.props.collapsed_sider}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={[this.props.current_route]}
                        onClick={this.change_route}
                    >
                        <Menu.Item key="1">
                            <Link to='/'>
                            <Icon type="user" />
                            <span>Home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/edit">
                                <Icon type="upload" />
                                <span>Edit Stock</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        collapsed_sider: state.globalReducer.menu_collapsed,
        current_route: state.globalReducer.current_menu
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeRoute: key =>
            dispatch({ type: "CURRENT_ROUTE", route_key: key })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppSider)
