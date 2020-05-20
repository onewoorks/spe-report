import React from 'react'
import { Row, Col, Checkbox, Tooltip } from 'antd'

const AksesAppsAllowed = (props) => {
    let apps = props.apps_allowed

    const showOptions = (apps) => {
        let payloads = {
            apps_name: apps.target.value.toLowerCase().replace(/\s/g, '_'),
            permission: apps.target.checked
        }
        props.granted(payloads)
    }

    const AppsAllowed = () => {
        return apps.map((x, index) => {
            return (
                <Col key={index} span={6}>
                    <Checkbox value={x.name} onClick={(x) => showOptions(x)}>
                        <Tooltip placement="topLeft" title="app_description">
                            {x.name}
                        </Tooltip>
                    </Checkbox>
                </Col>
            )
        })
    }
    return (
            <Row>
                <AppsAllowed />
            </Row>
    )
}

export default AksesAppsAllowed
