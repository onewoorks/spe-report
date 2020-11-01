import React from 'react'
import { Row, Col, Card, Table, Spin, Button, Space } from 'antd'
import NumberFormat from 'react-number-format'
import Moment from 'moment'
import { Link } from 'react-router-dom'

const ReportStokDataTables = (props) => {
    let loading = props.loading
    let ringkasan = props.ringkasan
    let tarikh =
        props.tarikh_akhir === '-'
            ? '-'
            : Moment(props.tarikh_akhir).format('Do MMMM YYYY')

    const dataSource = ringkasan
    const columns = [
        {
            key: 1,
            dataIndex: 'kedai',
            title: 'Cawangan',
        },
        {
            key: 2,
            title: 'Tag',
            dataIndex: 'tag',
            align: 'center',
        },
        {
            key: 3,
            title: 'Kuantiti Belum Jual',
            dataIndex: 'belum_jual',
            align: 'center',
        },
        {
            key: 4,
            title: 'Modal Belum Jual (RM)',
            dataIndex: 'modal_belum_jual',
            align: 'right',
            render: (text, record) => (
                <NumberFormat
                    thousandSeparator={true}
                    value={text}
                    displayType={'text'}
                />
            ),
        },
        {
            key: 5,
            title: 'Tindakan',
            align: 'center',
            render: (text, record) => {
                let path = `${text.kedai}/${props.tarikh_akhir}/${text.tag}`
                return (
                    <Space>
                        <Link to={`/stok/stok-akhir-detail/${path}`}><Button>Lihat Rekod</Button></Link>
                        <Button onClick={() => window.open(`http://localhost:8000/api/export/stok/tarikh-akhir-detail/${props.tarikh_akhir}/${text.tag}/${text.kedai}`)}>Export</Button>
                    </Space>
                )
            },
        },
    ]

    return (
        <Row gutter={[16, 16]} style={{ marginTop: -32 }}>
            <Col span={24}>
                <Card
                    title={`Ringkasan maklumat stok akhir sehingga tarikh ${tarikh}`}
                >
                    <Spin spinning={loading}>
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            bordered={true}
                        ></Table>
                    </Spin>
                </Card>
            </Col>
        </Row>
    )
}

export default ReportStokDataTables
