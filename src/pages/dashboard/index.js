import React from 'react'
import { Row, Col, Card, Skeleton } from 'antd'

import GroupColumn from '../../charts/GroupColumn'
import Line from '../../charts/Line'

const Dashboard = () => {
    return(
        <>
        <Row gutter={12} className="row-mb">
            <Col span={18}>
                <Card className='card-graph' title="Transaksi Aliran Wang" >
                    <GroupColumn />
                </Card>
            </Col>
            <Col span={6}>
                <Card className="card-graph" title="Peratus kenaikan">
                    <Line />
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