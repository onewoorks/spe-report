import React from 'react'
import { PageHeader, Card, Row, Col, Statistic } from 'antd'
import StokCawangan from './graphs/StokCawangan'
import StokJualan from './graphs/StokJualan'

const Dashboard = () => {
    const routes = [
        {
            path: 'index',
            breadcrumbName: 'Overview',
        },
    ]

    const StatistikStok = () => {
        return (
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <Card>
                    <Statistic
                        title="Jumlah Stok Pilihan (Nilai)"
                        value={0}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={'RM '}
                    />
                    </Card>
                </Col>
                <Col span={24}>
                    <Card>
                    <Statistic
                        title="Jumlah Stok Pilihan (Nilai)"
                        value={0}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={'RM '}
                    />
                    </Card>
                </Col>
                <Col span={24}>
                    <Card>
                    <Statistic
                        title="Jumlah Stok Pilihan (Nilai)"
                        value={0}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={'RM '}
                    />
                    </Card>
                </Col>
                
            </Row>
        )
    }

    return (
        <>
            <PageHeader title="Dashboard" breadcrumb={{ routes }} />
            <div className="">
                <Row gutter={[16]}>
                    <Col span={16}>
                        <Card title="Ringkasan Stok Cawangan">
                            <StokCawangan height={265} />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <StatistikStok />
                    </Col>
                    <Col span={24}>
                        <Card title="Statistik Jualan Setiap Cawangan">
                            <StokJualan height={265} />
                        </Card>
                    </Col>
                </Row>
                    
            </div>
        </>
    )
}

export default Dashboard
