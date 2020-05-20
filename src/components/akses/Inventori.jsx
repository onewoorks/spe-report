import React from 'react'
import { Checkbox, Row, Col, Tooltip, Divider } from 'antd'
const AksesInventory = (props) => {
    console.log(props.show)
    let cawangan = props.cawangan.split(',')
    let show = (props.show) ? 'block' : 'none'
    const SenaraiCawangan = () => {
        return cawangan.map((x, index) => {
            return (
                <Col key={index} span={4}>
                    <Checkbox value={x}>{x}
                    </Checkbox>
                </Col>
            )
        })
    }

    return (
        <div style={{display: show}}>
            <Divider orientation="left" style={{size:12, fontWeight:'normal'}}>
                Inventori
            </Divider>
            <Checkbox.Group>
                <Row>
                    <SenaraiCawangan />
                </Row>
            </Checkbox.Group>
        </div>
    )
}

export default AksesInventory
