import React from 'react'
import { PageHeader, Card, Row, Col, Statistic, Spin } from 'antd'
import StokCawangan from './graphs/StokCawangan'
import StokJualan from './graphs/StokJualan'
import axios from 'axios'

const Dashboard = () => {
    const [dataTerkini, setDataTerkini] = React.useState([])
    const [tagKuning, setTagKuning] = React.useState(0)
    const [tagPutih, setTagPutih] = React.useState(0)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(()=>{
        axios.post(`${process.env.REACT_APP_REPORT_URI}/statistik/stok-terkini-cawangan`,{})
        .then(response => {
           setDataTerkini(response.data)     
           setLoading(false)
           KiraModal(response.data)
        })
    },[])

    const KiraModal = (data) => {
        let tag_kuning = 0
        let tag_putih = 0
        data.map((x)=>{
            if(x.tag.toLowerCase() === 'putih')
                tag_putih += x.jumlah
            if(x.tag.toLowerCase() === 'kuning')
                tag_kuning += x.jumlah
            return true
        })
        setTagPutih(tag_putih)
        setTagKuning(tag_kuning)
    }

    const StatistikStok = () => {
        return (
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <Spin spinning={loading}>
                    <Card>
                    <Statistic
                        title="Modal Stok Tag Kuning - Belum Jual"
                        value={tagKuning}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={'RM '}
                    />
                    </Card>
                    </Spin>
                </Col>
                <Col span={24}>
                    <Spin spinning={loading}>
                    <Card>
                    <Statistic
                        title="Modal Stok Tag Putih - Belum Jual"
                        value={tagPutih}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={'RM '}
                    />
                    </Card>
                    </Spin>
                </Col>
                <Col span={24}>
                    <Spin spinning={loading}>
                    <Card>
                    <Statistic
                        title="Jumlah Stok Belum Jual"
                        value={(tagPutih + tagKuning)}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={'RM '}
                    />
                    </Card>
                    </Spin>
                </Col>
                
            </Row>
        )
    }

    return (
        <>
            <PageHeader title="Dashboard"/>
            <div className="">
                <Row gutter={[16]}>
                    <Col span={16}>
                        <Spin spinning={loading}>
                        <Card title="Ringkasan Stok Terkini Cawangan (Tag Kuning & Putih) - (Belum Jual)">
                            <StokCawangan height={265} data={dataTerkini} />
                        </Card>
                        </Spin>
                    </Col>
                    <Col span={8}>
                        <StatistikStok />
                    </Col>
                    <Col span={24}>
                        <Spin spinning={loading}>
                        <Card title="Statistik Jualan Setiap Cawangan (30 hari)">
                            <StokJualan height={265} />
                        </Card>
                        </Spin>
                    </Col>
                </Row>
                    
            </div>
        </>
    )
}

export default Dashboard
