import React from 'react'
import { Row, Col, Table, Spin, Card, Statistic } from 'antd'
import axios from 'axios'
import Moment from 'moment'
import NumberFormat from 'react-number-format'

const ReportStockDaftarDetail = (props) => {
    const [stockData, setStockData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    let params = props.match.params
    React.useEffect(() => {
        axios
            .post(`${process.env.REACT_APP_REPORT_URI}/stok/stok-daftar-detail`, {
                cawangan: params.kedai,
                tarikh: [params.tarikh_mula, params.tarikh_akhir],
                tag: params.tag,
            })
            .then((response) => {
                setStockData(response.data)
                setLoading(false)
            })
    }, [params])
    const dataSource = stockData
    const columns = [
        { title: 'Invois Belian', dataIndex: 'purchase_invoice' },
        {
            title: 'Tarikh Daftar',
            dataIndex: 'tarikh_daftar',
            render: (text, record) => Moment(text).format('Do MMM YYYY'),
        },
        {
            title: 'Tarikh Jual',
            dataIndex: 'tarikh_jualan',
            render: (text, record) =>
                typeof text === 'object'
                    ? ''
                    : Moment(text).format('Do MMM YYYY'),
        },
        { title: 'Nama Barang', dataIndex: 'nama_barang' },
        { title: 'No Tag', dataIndex: 'no_tag' },
        { title: 'Berat Daftar', dataIndex: 'berat_daftar', align:'right' , render: (text) => <NumberFormat thousandSeparator={true} value={text} displayType={'text'} /> },
        { title: 'Berat Jual', dataIndex: 'berat_jualan', align:'right' , render: (text) => <NumberFormat thousandSeparator={true} value={text} displayType={'text'} /> },
        {
            title: 'Modal Barang',
            dataIndex: 'modal_barang',
            align: 'right',
            render: (text, record) => (
                <NumberFormat
                    thousandSeparator={true}
                    displayType={'text'}
                    value={text}
                />
            ),
        },
        {
            title: 'Kerat',
            dataIndex: 'emas_kerat',
            align: 'right',
            render: (text, record) => (
                <NumberFormat
                    thousandSeparator={true}
                    displayType={'text'}
                    value={text}
                />
            ),
        },
        {title: 'Tempoh Simpan', dataIndex:'tarikh_daftar', align: 'center', render: (text,record) => {
            let daftar = Moment(record.tarikh_daftar)
            let jualan = Moment(record.tarikh_jualan)
            let sekarang = Moment()
            let hari = parseInt(Moment.duration(jualan.diff(daftar)).asDays().toFixed(0)) 
            let total_hari = parseInt(Moment.duration(sekarang.diff(daftar)).asDays().toFixed(0)) 
            let kira_hari = isNaN(hari) ? total_hari : hari
            return kira_hari + " hari"
        }}
    ]

    const RowStatistic = () => {
        let belum_jual = 0
        let sudah_jual = 0
        let modal_barang = 0
        stockData.map((x,index)=>{
            belum_jual += (typeof x.tarikh_jualan === 'object') ? 0 : 1
            sudah_jual += (typeof x.tarikh_jualan === 'object') ? 1 : 0
            modal_barang += parseFloat(x.modal_barang)
            return true
        })
        return (
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Card>
                        <Spin spinning={loading}>
                            <Statistic
                                title="Kuantiti Stok Daftar"
                                value={stockData.length}
                                precision={0}
                                valueStyle={{ color: '#3f8600' }}
                                suffix={' unit'}
                            />
                        </Spin>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Spin spinning={loading}>
                            <Statistic
                                title="Kuantiti Stok Belum Jual"
                                value={belum_jual}
                                precision={0}
                                valueStyle={{ color: '#3f8600' }}
                                suffix={' unit'}
                            />
                        </Spin>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Spin spinning={loading}>
                            <Statistic
                                title="Kuantiti Stok Sudah Jual"
                                value={sudah_jual}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                suffix={' unit'}
                            />
                        </Spin>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Spin spinning={loading}>
                            <Statistic
                                title="Jumlah Modal Tarikh Pilihan"
                                value={modal_barang}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={'RM '}
                            />
                        </Spin>
                    </Card>
                </Col>
            </Row>
        )
    }
    return (
        <>
            <RowStatistic />
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Card
                        title={
                            'Senarai stok yang didaftarkan mengikut tarikh pilihan'
                        }
                    >
                        <Spin spinning={loading}>
                            <Table
                                dataSource={dataSource}
                                columns={columns}
                                pagination={{ pageSize: 25 }}
                                bordered={true}
                            />
                        </Spin>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ReportStockDaftarDetail
