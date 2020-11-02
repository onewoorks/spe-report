import React from 'react'
import { Layout, Row, Col, Avatar, Menu, Dropdown } from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    DownOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'

const { Header } = Layout

const go_to_central = () => {
    window.location.href = process.env.REACT_APP_CEMTRAL_APPS
}
const user_menu = (props) => {
    return (
    <Menu>
        <Menu.Item onClick={go_to_central}>Central Apps</Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <div onClick={() => props.keycloak.logout()}>Logout</div>
        </Menu.Item>
    </Menu>
)}

class AppHeader extends React.Component {
    state = {
        collapsed: false
    }

    toggle = () => this.props.toggle()

    render() {
        // let user = this.props.auth.keycloak.tokenParsed
        let user = { name: "iwang"}
        let side_width = !this.props.sider_icon ? 200 : 0
        let nav_width = window.innerWidth - side_width
        return (
            <div style={{display:'flex'}}>
                <Header
                    className="header"
                    style={{ background: '#fff', padding: 0, position:'fixed', width: nav_width, transition: '0.2s', zIndex:1}}
                >
                    <Row justify="space-between">
                        <Col span={12}>
                            <div className="trigger" onClick={this.toggle}>
                                {!this.props.sider_icon ? (
                                    <MenuFoldOutlined />
                                ) : (
                                    <MenuUnfoldOutlined />
                                )}
                            </div>
                        </Col>
                        <Col
                            span={12}
                            style={{ textAlign: 'right', paddingRight: 24 }}
                        >
                            <Avatar icon={<UserOutlined />} />
                            <Dropdown overlay={user_menu(this.props.auth)}>
                                <span
                                    onClick={e => e.preventDefault()}
                                >
                                    <span style={{ marginLeft: 10, textTransform: 'capitalize'}}>
                                        {user.name.toLowerCase()} <DownOutlined />
                                    </span>
                                </span>
                                
                            </Dropdown>
                            
                        </Col>
                    </Row>
                </Header>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sider_icon: state.globalReducer.menu_collapsed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch({ type: 'LAYOUT_COLLAPSED' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
