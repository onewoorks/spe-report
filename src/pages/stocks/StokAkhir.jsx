import React from 'react'
import { Row, Col, Card} from 'antd'

const StocksStokAkhir = () => {
    return (
        <Row gutter={[4, 4]}>
            <Col span="12">
                <Card title="Col 1">
                    <p>content card 1 col 1</p>
                </Card>
            </Col>
            <Col span="12">
                <Card>
                    <p>content card 2 col 2</p>
                </Card>
            </Col>
        </Row>
    )
}

export default StocksStokAkhir