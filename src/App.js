import React from 'react'
import Keycloak from 'keycloak-js'
import { Layout } from 'antd'
import Header from './layout/header'
import Sider from './layout/sider.js'
import Footer from './layout/footer'
import './App.css'
import axios from 'axios'
import {Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// import {useKeycloak } from '@react-keycloak/web'

axios.defaults.headers.common['realm'] = 'development'

const { Content } = Layout
const routes = require('./routes')

const MainApps = (props) => {
    const [auth, setAuth] = React.useState({})
    // const { initialized, keycloak } = useKeycloak()
    // console.log('initialized')
    // console.log(initialized)
    // console.log('keycloak')
    // console.log(keycloak?.authenticated)

    // const login = React.useCallback(() => {
    //     keycloak.login()
    //   }, [keycloak])

    // if (keycloak?.authenticated){
    //     console.log(keycloak)
    //     return (
    //         <div>User dah login</div>
    //     )
    //     } else {
    //     return (
    //             <div>
    //               <button type="button" onClick={login}>
    //                 Login
    //               </button>
    //             </div>
    //           )
    // }
     
    React.useEffect(() => {
        // const keycloak = Keycloak('/keycloak.json')
        const keycloak = Keycloak({
            url: 'https://sso.pengurusanemas.my/auth/',
            realm: 'development',
            clientId: 'spe-stok',
            "policy-enforcer": {
                "enforcement-mode": "DISABLED"
              }
          })
        keycloak
            .init({
                onLoad: 'login-required',
                promiseType: 'native',
                checkLoginIframe: false,
                initOptions: {
                    flow: 'implicit',
              }
            })
            .then(authenticated => {
                setAuth({
                  keycloak: keycloak,
                  tokenParsed: keycloak.idTokenParsed,
                  authenticated: authenticated,
                  apps: keycloak.resourcesAccess
                })
                props.logged_user(keycloak.idTokenParsed)
            })
    },[props])

    if (auth.keycloak) {
        if (auth.authenticated) {
            return (
                <Layout style={{ height: '100vh' }}>
                    <Sider />
                    <Layout className="site-layout">
                        <Header auth={auth} />
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '14px',
                                marginTop: 80,
                                minHeight: 280,
                                overflow:'initial'
                            }}
                        >
                            <Switch>
                                {routes.default.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.component}
                                    />
                                ))}
                            </Switch>
                            <Footer />
                        </Content>
                    </Layout>
                </Layout>
            )
        } else {
            return <div>unable to authenticate</div>
        }
    }
    return <div>initilizing authentication</div>
}


const mapDispatchToProps = dispatch => {
    return {
        logged_user: (payloads) => dispatch({ type:"LOGGED_USER", payloads: payloads})
    }
}
export default connect(null, mapDispatchToProps)(MainApps)
