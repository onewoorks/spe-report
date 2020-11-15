import React from 'react'
import Keycloak from 'keycloak-js'
import { Layout } from 'antd'
import Header from './layout/header'
import Sider from './layout/sider.js'
import Footer from './layout/footer'
import './App.css'
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// axios.defaults.headers.common['realm'] = 'development'

const { Content } = Layout
const routes = require('./routes')

const MainApps = (props) => {
  
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider />
            <Layout className="site-layout">
                <Header />
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '14px',
                        marginTop: 80,
                        minHeight: 280,
                        overflow: 'initial',
                    }}
                >
                    <Switch>
                        {routes.default.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            )
                        })}
                    </Switch>
                    <Footer />
                </Content>
            </Layout>
        </Layout>
    )

    
}

const mapDispatchToProps = (dispatch) => {
    return {
        logged_user: (payloads) =>
            dispatch({ type: 'LOGGED_USER', payloads: payloads }),
    }
}

export default connect(null, mapDispatchToProps)(MainApps)
