import React from 'react'
import { Row, Col, Form, Select, Button, DatePicker, Card, Input } from 'antd'
import axios from 'axios'

import ReportStokStats from './stats.jsx'
import ReportStokDataTables from './ReportStokDataTables.jsx'
import { SearchOutlined } from '@ant-design/icons'

const { Option } = Select
const { RangePicker } = DatePicker

const ReportStokFilter = (props) => {
    let resturl = props.resturl
    let report = props.report
    const [cawangan, setCawangan] = React.useState([])
    const [ringkasan, setRingksan] = React.useState([])
    const [form] = Form.useForm()
    const [tarikhReport, setTarikhReport] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_REPORT_URI}/ref/cawangan`)
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
            let tarikh = (typeof values.tarikh.length === 'undefined') ? values.tarikh.format('YYYY-MM-DD') : [values.tarikh[0].format('YYYY-MM-DD'), values.tarikh[1].format('YYYY-MM-DD')]
            let post_body = {
                cawangan: values.cawangan,
                tarikh: tarikh
            }
            
            axios
                .post(`${process.env.REACT_APP_REPORT_URI}${resturl}`, post_body)
                .then((response) => {
                    setRingksan(response.data)
                    setTarikhReport(tarikh)
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
                <Form.Item label={'Tarikh Akhir'} name="tarikh">
                    <DatePicker />
                </Form.Item>
            )
        }
        if (['stok-daftar','stok-buang','stok-jual'].includes(report)) {
            item = (
                <Form.Item label={'Tarikh Pilihan'} name="tarikh">
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
                                        <Option key={index} value={x.value}>
                                            {x.label}
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
                report={report}
                ringkasan={ringkasan}
                loading={loading}
                tarikh={tarikhReport}
            />
        </>
    )
}

export default ReportStokFilter
