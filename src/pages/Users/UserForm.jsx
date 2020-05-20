import React from 'react'
import { Card, Form, Tabs, Input, Radio, Button } from 'antd'
import { connect } from 'react-redux'

import AksesAppsAllowed from '../../components/akses/AppsAllowed.jsx'
import AksesInventory from '../../components/akses/Inventori.jsx'

const { TextArea } = Input
const { TabPane } = Tabs
const NewUser = (props) => {
    const [ akses, setAkses ] = React.useState({
        apps_allowed: {}
    })
    const submitForm = (values) => console.log(values)

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 },
    }
    const tailLayout = {
        wrapperCol: { offset: 5, span: 16 },
    }

    const aksesGranted = (granted) => {
        // setAkses({...akses,apps_allowed: granted})
        console.log(granted)
    }

    const BasicInfo = () => {
        return (
            <div>
                <Form.Item
                    label="Nama Pengguna"
                    name="username"
                    style={{ marginTop: 20 }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Nama Depan"
                    name="firstname"
                    style={{ marginTop: 20 }}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Nama Belakang" name="lastname">
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
                <Form.Item label="Aplikasi SPE" >
                    <AksesAppsAllowed
                        apps_allowed={props.user_attributes.apps_allowed}
                        granted={(apps_granted)=> aksesGranted(apps_granted)}
                    />
                </Form.Item>
                <AksesInventory cawangan={props.user_attributes.domain} show={false} />
            </div>
        )
    }

    return (
        <Card title="Maklumat Pengguna Sistem">
            <Form {...layout} name="user-registration" onFinish={submitForm}>
                <Tabs defaultActiveKey="1" type="card">
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

const mapStateToProps = (state) => {
    return {
        user_attributes: state.globalReducer.logged_user,
    }
}
export default connect(mapStateToProps)(NewUser)
