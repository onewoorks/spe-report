import React from "react"
import { Layout, Icon } from "antd"
import { connect } from "react-redux"

const { Header } = Layout

class AppHeader extends React.Component {
    state = {
        collapsed: false
    }

    toggle = () => {
        this.props.toggle()
        // this.setState({
        //     collapsed: !this.state.collapsed
        // })
    }

    render() {
        return (
            <>
                <Header style={{ background: "#fff", padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={
                            this.state.collapsed ? "menu-unfold" : "menu-fold"
                        }
                        onClick={this.toggle}
                    />
                </Header>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch({ type: "LAYOUT_COLLAPSED" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
