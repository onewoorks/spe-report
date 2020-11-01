import React from 'react'
import { Row, Col, Form, Select, Button, DatePicker, Card, Input } from 'antd'
import axios from 'axios'

import ReportStokStats from './stats.jsx'
import ReportStokDataTables from './data_tables.jsx'
import { SearchOutlined } from '@ant-design/icons'

const { Option } = Select
const { RangePicker } = DatePicker

const ReportStokFilter = (props) => {
    let resturl = props.resturl
    let report = props.report
    const [cawangan, setCawangan] = React.useState([])
    const [ringkasan, setRingksan] = React.useState([])
    const [form] = Form.useForm()
    const [tarikhAkhir, setTarikhAkhir] = React.useState('-')
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        axios
            .get('http://localhost:8000/api/cawangan')
            .then((data) => setCawangan(data.data))
    }, [])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    }
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    }

    const buat_carian = () => {
        setLoading(true)
        form.validateFields().then((values) => {
            let tarikh_akhir = values.tarikh_akhir.format('YYYY-MM-DD')
            axios
                .post(`http://localhost:8000/api${resturl}`, {
                    cawangan: values.cawangan,
                    tarikh_akhir: tarikh_akhir,
                })
                .then((response) => {
                    setRingksan(response.data)
                    setTarikhAkhir(tarikh_akhir)
                    setLoading(false)
                })
        })
    }

    const NoInvois = () => {
        let item = ""
        if(['stok-invois-belian'].includes(report)){
            item = (
                <Form.Item label={'No Invois'}>
                    <Input placeholder="No Invois" />
                </Form.Item>
            )
        }
        return item
    }

    const DateSelector = () => {
        let item = ""
        if (['stok-akhir'].includes(report)) {
            item = (
                <Form.Item label={'Tarikh Akhir'} name="tarikh_akhir">
                    <DatePicker />
                </Form.Item>
            )
        }
        if (['stok-daftar','stok-buang','stok-jual', 'stok-invois-belian'].includes(report)) {
            item = (
                <Form.Item label={'Tarikh Pilihan'} name="tarikh_pilihan">
                    <RangePicker />
                </Form.Item>
            )
        }
        return item
    }

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span="12">
                    <Card title="Rekod Pilihan" style={{ minHeight: 242 }}>
                        <Form {...layout} onFinish={buat_carian} form={form}>
                            <DateSelector />

                            <NoInvois />

                            <Form.Item label={'Cawangan'} name="cawangan">
                                <Select
                                    placeholder={'Sila pilih cawangan'}
                                    mode="multiple"
                                    name="cawangan"
                                >
                                    {cawangan.map((x, index) => (
                                        <Option key={index} value={x}>
                                            {x}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>


                            <Form.Item
                                {...tailLayout}
                                style={{ textAlign: 'right' }}
                            >
                                <Button type="primary" htmlType="submit">
                                    <SearchOutlined /> Lakukan Carian
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>

                <Col span="12">
                    <ReportStokStats ringkasan={ringkasan} loading={loading} />
                </Col>
            </Row>
            <ReportStokDataTables
                ringkasan={ringkasan}
                loading={loading}
                tarikh_akhir={tarikhAkhir}
            />
        </>
    )
}

export default ReportStokFilter
