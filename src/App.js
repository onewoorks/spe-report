import React from 'react'
import Keycloak from 'keycloak-js'
import { Layout } from 'antd'

import Header from './layout/header'
import Sider from './layout/sider.js'
import Footer from './layout/footer'
import './App.css'

import { Switch, Route } from 'react-router-dom'

const { Content } = Layout
const routes = require('./routes')

const MainApps = () => {
    const [auth, setAuth] = React.useState({})

    React.useEffect(() => {
        const keycloak = Keycloak('./keycloak.json')
        keycloak
            .init({
                onLoad: 'login-required',
                promiseType: 'native'
            })
            .then(authenticated => {
                setAuth({
                  keycloak: keycloak,
                  tokenParsed: keycloak.idTokenParsed,
                  authenticated: authenticated,
                  apps: keycloak.resourcesAccess
                })
            })
    },[])

    if (auth.keycloak) {
        if (auth.authenticated) {
            return (
                <Layout style={{ height: '100vh' }}>
                    <Sider />
                    <Layout>
                        <Header auth={auth} />
                        <Content
                            style={{
                                margin: '14px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 280
                            }}
                        >
                            <Switch>
                                {routes.default.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
                            </Switch>
                            
                        </Content>
                        <Footer />
                    </Layout>
                </Layout>
            )
        } else {
            return <div>unable to authenticate</div>
        }
    }
    return <div>initilizing authentication</div>
}

export default MainApps
