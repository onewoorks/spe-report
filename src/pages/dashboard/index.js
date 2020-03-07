import React from 'react'
import { Row, Col, Card, Skeleton } from 'antd'

import GroupColumn from '../../charts/GroupColumn'

const Dashboard = () => {
    return(
        <>
        <Row gutter={12} className="row-mb">
            <Col span={24}>
                <Card className='card-graph' style={{padding:1}}>
                    <GroupColumn />
                </Card>
            </Col>
        </Row>
        <Row gutter={12} className="row-mb">
            <Col span={24}>
                <Card>
                    <Skeleton active />
                </Card>
            </Col>
        </Row>
        <Row gutter={12} className="row-mb">
            <Col span={12}>
                <Card>
                    <Skeleton active />
                </Card>
            </Col>

            <Col span={12}>
            <Card>
                <Skeleton active />
            </Card>
            </Col>
        </Row>
        </>
    )
}

export default Dashboard