import React from 'react'
import { PageHeader, Card, Row, Col, Statistic } from 'antd'
import StokCawangan from './graphs/StokCawangan'
import StokJualan from './graphs/StokJualan'
import axios from 'axios'

const Dashboard = () => {
    const [dataTerkini, setDataTerkini] = React.useState([])
    const [tagKuning, setTagKuning] = React.useState(0)
    const [tagPutih, setTagPutih] = React.useState(0)
    const routes = [
        {
            path: 'index',
            breadcrumbName: 'Overview',
        },
    ]

    React.useEffect(()=>{
        axios.post(`http://localhost:8000/api/statistik/stok-terkini-cawangan`,{})
        .then(response => {
           setDataTerkini(response.data)
           
        })
    },[])


    const StatistikStok = () => {
        return (
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <Card>
                    <Statistic
                        title="Modal Stok Tag Kuning - Belum Jual"
                        value={tagKuning}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={'RM '}
                    />
                    </Card>
                </Col>
                <Col span={24}>
                    <Card>
                    <Statistic
                        title="Modal Stok Tag Putih - Belum Jual"
                        value={tagPutih}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={'RM '}
                    />
                    </Card>
                </Col>
                <Col span={24}>
                    <Card>
                    <Statistic
                        title="Jumlah Stok Belum Jual"
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
                        <Card title="Ringkasan Stok Terkini Cawangan (Tag Kuning & Putih) - (Belum Jual)">
                            <StokCawangan height={265} data={dataTerkini} />
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
