import React from 'react'
import { Card, Form, Tabs, Input, Radio, Select, Button,Checkbox } from 'antd'
import { connect } from 'react-redux'

const { TextArea } = Input
const { TabPane } = Tabs
const NewUser = (props) => {
    console.log(props.user_attributes)
    const submitForm = (values) => console.log(values)

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 },
    }
    const tailLayout = {
        wrapperCol: { offset: 5, span: 16 },
    }

    const BasicInfo = () => {
        return (
            <div>
                <Form.Item label="First Name" name="firstname" style={{marginTop:20}}>
                    <Input />
                </Form.Item>
                <Form.Item label="Last Name" name="lastname">
                    <Input />
                </Form.Item>
                <Form.Item label="Jantina" name="gender">
                    <Radio.Group>
                        <Radio value="male">Lelaki</Radio>
                        <Radio value="female">Perempuan</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="No Telefon" name="noTelefon">
                    <Input />
                </Form.Item>

                <Form.Item label="Email" name="email">
                    <Input />
                </Form.Item>

                <Form.Item label="Alamat" name="alamat">
                    <TextArea rows={5} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <div style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Daftar Pengguna
                        </Button>
                    </div>
                </Form.Item>
            </div>
        )
    }

    const AksesCawanganDanApplikasi = () => {
        return (
            <div>
               <Form.Item label="Aplikasi SPE">
                    <Checkbox.Group>
                        <Checkbox value="inventori">Inventori</Checkbox>
                        <Checkbox value="kakitangan">Pengurusan Kakitangan</Checkbox>
                    </Checkbox.Group>
               </Form.Item>
            </div>
        )
    }

    return (
        <Card title="Maklumat Pengguna Sistem">
            <Form {...layout} name="user-registration" onFinish={submitForm}>
                <Tabs defaultActiveKey="1" type="card" >
                    <TabPane tab="Informasi Asas" key="1">
                        <BasicInfo />
                    </TabPane>
                    <TabPane tab="Akses Cawangan dan Applikasi" key="2">
                        <AksesCawanganDanApplikasi />
                    </TabPane>
                </Tabs>
            </Form>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        user_attributes: state.globalReducer.logged_user
    }
}
export default connect(mapStateToProps)(NewUser)
