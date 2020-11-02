import React from 'react'
import { Row, Col, Card, Table, Spin, Button, Space } from 'antd'
import NumberFormat from 'react-number-format'
import Moment from 'moment'
import { Link } from 'react-router-dom'

const ReportStokDataTables = (props) => {
    let loading = props.loading
    let ringkasan = props.ringkasan
    let report = props.report
    let tarikh =
        props.tarikh.length === 0
            ? ''
            : props.tarikh.length === 2
            ? Moment(props.tarikh[0]).format('Do MMMM YYYY') +
              ' hingga ' +
              Moment(props.tarikh[1]).format('Do MMMM YYYY')
            : Moment(props.tarikh).format('Do MMMM YYYY')

    const dataSource = ringkasan

    const columns_stok_jual = [
        {title: 'Cawangan'},
        {title: 'Tag'},
        {title: 'Kuantiti'},
        {title: 'Jumlah Berat Jualan'},
        {title: 'Jumlah Modal Jualan'},
        {title: 'Tindakan'}
    ]

    const columns_stok_buang = [
        {title: 'Cawangan'},
        {title: 'Tag'},
        {title: 'Kuantiti'},
        {title: 'Jumlah Berat Buang'},
        {title: 'Jumlah Modal Buang'},
        {title: 'Tindakan'}
    ]

    const columns_stok_invois_belian = [
        {title: 'Cawangan'},
        {title: 'Kuantiti'},
        {title: 'No Invoice'},
        {title: 'Tag'},
        {title: 'Jumlah Berat Daftar'},
        {title: 'Jumlah Modal'},
        {title: 'Tindakan'}
    ]

    const columns_range = [
        { title: 'Cawangan', dataIndex: 'kedai' },
        { title: 'Tag', dataIndex: 'tag', align: 'center' },
        {
            title: 'Total Item',
            dataIndex: 'total_item',
            align: 'center',
            render: (text, record) => (
                <NumberFormat
                    thousandSeparator={true}
                    value={text}
                    displayType={'text'}
                />
            ),
        },
        {
            title: 'Kuantiti Belum Jual',
            dataIndex: 'belum_jual',
            align: 'center',
            render: (text, record) => (
                <NumberFormat
                    thousandSeparator={true}
                    value={text}
                    displayType={'text'}
                />
            ),
        },
        {
            title: 'Kuantiti Sudah Jual',
            dataIndex: 'kuantiti_sudah_jual',
            align: 'center',
            render: (text, record) => (
                <NumberFormat
                    thousandSeparator={true}
                    value={text}
                    displayType={'text'}
                />
            ),
        },
        {
            title: 'Peratus Jual',
            align: 'center',
            render: (text, record) => {
                return (
                    (
                        (text.kuantiti_sudah_jual / text.total_item) *
                        100
                    ).toFixed(2) + '%'
                )
            },
        },
        {
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
            title: 'Tindakan',
            render: (text, record) => {
                let path = `${text.kedai}/${props.tarikh[0]}/${props.tarikh[1]}/${text.tag}`
                return (
                    <Space>
                        <Link to={`/stok/${props.report}-detail/${path}`}>
                            <Button>Lihat Rekod</Button>
                        </Link>
                        <Button>Export</Button>
                    </Space>
                )
            },
        },
    ]

    const columns = [
        { key: 0, dataIndex: 'kedai', title: 'Cawangan' },
        { key: 1, title: 'Tag', dataIndex: 'tag', align: 'center' },
        {
            key: 2,
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
            key: 7,
            title: 'Tindakan',
            align: 'center',
            render: (text, record) => {
                let path = `${text.kedai}/${props.tarikh}/${text.tag}`
                return (
                    <Space>
                        <Link to={`/stok/stok-akhir-detail/${path}`}>
                            <Button>Lihat Rekod</Button>
                        </Link>
                        <Button
                            onClick={() =>
                                window.open(
                                    `http://localhost:8000/api/export/stok/tarikh-akhir-detail/${props.tarikh}/${text.tag}/${text.kedai}`
                                )
                            }
                        >
                            Export
                        </Button>
                    </Space>
                )
            },
        },
    ]

    const ReportTable = () => {
        let table = ''
        if (['stok-akhir'].includes(report)) {
            table = (
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    bordered={true}
                ></Table>
            )
        }
        if (['stok-daftar'].includes(report)) {
            table = (
                <Table
                    dataSource={dataSource}
                    columns={columns_range}
                    bordered={true}
                ></Table>
            )
        }
        if(['stok-jual'].includes(report)){
            table = (
                <Table
                    dataSource={dataSource}
                    columns={columns_stok_jual}
                    bordered={true}
                ></Table>
            )
        }
        if(['stok-buang'].includes(report)){
            table = (
                <Table
                    dataSource={dataSource}
                    columns={columns_stok_buang}
                    bordered={true}
                ></Table>
            )
        }
        if(['stok-invois-belian'].includes(report)){
            table = (
                <Table
                    dataSource={dataSource}
                    columns={columns_stok_invois_belian}
                    bordered={true}
                ></Table>
            )
        }
        return table
    }

    return (
        <Row gutter={[16, 16]} style={{ marginTop: -32 }}>
            <Col span={24}>
                <Card
                    title={`Ringkasan maklumat ${report}  bertarikh : ${tarikh}`}
                >
                    <Spin spinning={loading}>
                        <ReportTable />
                    </Spin>
                </Card>
            </Col>
        </Row>
    )
}

export default ReportStokDataTables
