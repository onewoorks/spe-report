import React from 'react'
import { Row, Col, Card, Table, Spin, Button } from 'antd'
import axios from 'axios'
import Moment from 'moment'
import NumberFormat from 'react-number-format'

const ReportStockDetail = (props) => {
    let params = props.match.params
    const [senaraiItem, setSenaraiItem] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const dataSource = senaraiItem
    const columns = [
        { title: 'Nama Barang', dataIndex: 'nama_barang' },
        { title: 'Purchase Invoice', dataIndex: 'purchase_invoice' },
        {
            title: 'Tarikh Daftar',
            dataIndex: 'tarikh_daftar',
            render: (text) => Moment(text).format('DD/MM/YYYY'),
        },
        { title: 'Pembekal', dataIndex: 'pembekal' },
        {
            title: 'Berat Daftar',
            dataIndex: 'berat_daftar',
            align: 'right',
            render: (text) => (
                <NumberFormat
                    displayType="text"
                    thousandSeparator={true}
                    value={text}
                />
            ),
        },
        {
            title: 'Modal Item',
            dataIndex: 'modal_barang',
            align: 'right',
            render: (text) => (
                <NumberFormat
                    displayType="text"
                    thousandSeparator={true}
                    value={text}
                />
            ),
        },
    ]
    React.useEffect(() => {
        axios
            .post(`${process.env.REACT_APP_REPORT_URI}/stok/tarikh-akhir-detail`, {
                cawangan: params.kedai,
                tarikh_akhir: params.tarikh,
                tag: params.tag,
            })
            .then((response) => {
                setSenaraiItem(response.data)
                setLoading(false)
            })
    }, [params])

    const ExportToCsv = () => {
        window.open(`${process.env.REACT_APP_REPORT_URI}/export/stok/tarikh-akhir-detail/${params.tarikh}/${params.tag}/${params.kedai}`)
    }

    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Card title="Senarai item stok akhir">
                    <Spin spinning={loading}>
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            bordered={true}
                            size={'small'}
                            pagination={{ pageSize: 25 }}
                        />
                        <div style={{ textAlign: 'right' }}>
                            <Button type="primary" onClick={()=> ExportToCsv()}>Export CSV</Button>
                        </div>
                    </Spin>
                </Card>
            </Col>
        </Row>
    )
}

export default ReportStockDetail
