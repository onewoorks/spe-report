import React from 'react'
import {
    Form,
    Select,
    Button,
    PageHeader,
    Row,
    Col,
    Card,
    Statistic,
    DatePicker,
    Table,
    Tabs,
} from 'antd'

const { Option } = Select
const { RangePicker } = DatePicker
const { TabPane } = Tabs

const StocksDalamSimpanan = (props) => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    }
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    }

    const StatisticDash = () => {
        return (
            <Row gutter={[16, 16]}>
                <Col span="12">
                    <Card title="Rekod Pilihan" style={{ minHeight: 242 }}>
                        <Form {...layout}>
                            <Form.Item label={'Cawangan'}>
                                <Select defaultValue={'semua_cawangan'}>
                                    <Option value="semua_cawangan">
                                        Semua Cawangan
                                    </Option>
                                    <Option value="Kemaman">Kemaman</Option>
                                    <Option value="dungun">Dungun</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label={'Tarikh Pilihan'}>
                                <RangePicker />
                            </Form.Item>

                            <Form.Item
                                {...tailLayout}
                                style={{ textAlign: 'right' }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>

                <Col span="12">
                    <Row gutter={[16, 16]}>
                        <Col span="12">
                            <Card>
                                <Statistic
                                    title="Jumlah Stok Terkini (Kuantiti)"
                                    value={34246234}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={'RM '}
                                />
                            </Card>
                        </Col>

                        <Col span="12">
                            <Card>
                                <Statistic
                                    title="Jumlah Stok Terkini (Nilai)"
                                    value={4034}
                                    precision={0}
                                    valueStyle={{ color: '#3f8600' }}
                                    suffix={'unit'}
                                />
                            </Card>
                        </Col>

                        <Col span="12">
                            <Card>
                                <Statistic
                                    title="Berat Emas"
                                    value={5234}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    suffix={'gram'}
                                />
                            </Card>
                        </Col>

                        <Col span="12">
                            <Card>
                                <Statistic
                                            title="Nilai Bukan Emas"
                                            value={4034}
                                            precision={0}
                                            valueStyle={{ color: '#3f8600' }}
                                            suffix={'unit'}
                                        />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }

    const dataSource = []
    const columns = [
        {
            title: 'Mutu',
        },
        {
            title: 'Tarikh Daftar',
        },
        { title: 'Nama Barang' },
        { title: 'Berat' },
        { title: 'Modal Emas' },
        { title: 'Modal Permata' },
        { title: 'Modal Upah' },
        { title: 'Harga Modal' },
    ]

    return (
        <div>
            <PageHeader title="Stok Dalam Simpanan" />
            <StatisticDash />
            <Row gutter={[16, 16]} style={{ marginTop: -32 }}>
                <Col span={24}>
                    <Card title="Statistic">
                        <Tabs defaultValue="1" type="card">
                            <TabPane tab="Kemaman" key="1">
                                Kemaman
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    bordered={true}
                                ></Table>
                            </TabPane>

                            <TabPane tab="Dungun" key="2">
                                Dungun
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    bordered={true}
                                ></Table>
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default StocksDalamSimpanan
