import React from 'react'
import { PageHeader, Card, Row, Col } from 'antd'
import Lottie from 'react-lottie'

import * as animationData from '../../assets/lottie/dashboard.json'
import * as graphData from '../../assets/lottie/graph.json'

const Dashboard = () => {
    const routes = [
        {
            path: 'index',
            breadcrumbName: 'Overview',
        },
    ]

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    const lottie_graph = {
        loop: true,
        autoplay: true,
        animationData: graphData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    }

    return (
        <div>
            <PageHeader title="Dashboard" breadcrumb={{ routes }} />
            <div className="content-panel">
                <Row gutter={[16,16]}>
                    <Col span={12}>
                    <Card title="Dashboard Laporan" size="small">
                        <Lottie
                            options={defaultOptions}
                            height={300}
                            width={300}
                            isStopped={false}
                            isPaused={false}
                        />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Pergerakan Stok dan Jualan" size="small">
                            <Lottie
                            options={lottie_graph}
                            height={300}
                            width={300}
                            isStopped={false}
                            isPaused={false}
                        />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Dashboard
