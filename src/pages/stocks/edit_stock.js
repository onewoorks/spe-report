import React from "react"
import { Row, Col, Card } from "antd"

export default class EditStock extends React.Component {
    render() {
        return (
            <Row gutter={[16,16]}>
                <Col lg={8}>
                    <Row gutter={[16,16]}>
                        <Col>
                            <Card title="Panel Carian" size="small">
                                <div>Form Cari Stok</div>
                            </Card>
                        </Col>
                        <Col>
                            <Card title="Hasil Carian!!" size="small">
                                <div>Maklumat stok yang ditemui</div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg={16}>
                    <Card
                        title="Senarai stok yang akan dikemaskini"
                        size="small"
                    >
                        <div>Form Cari Stok</div>
                    </Card>
                </Col>
            </Row>
        )
    }
}
