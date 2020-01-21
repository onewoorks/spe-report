import React from "react"
import { Layout } from "antd"

import Header from './layout/header'
import Sider from './layout/sider.js'
import './App.css'

import { Switch, Route} from 'react-router-dom'

const { Content } = Layout
const routes = require('./routes')

class MainApps extends React.Component {
    state = {
        collapsed: false
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <Layout style={{height:"100vh"}}>
            <Sider />
                <Layout>
                    <Header />
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            background: "#fff",
                            minHeight: 280
                        }}
                    >
                        <Switch>
                            {routes.default.map((route, index) => (
                                <Route key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />} />
                            ))}
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default MainApps
