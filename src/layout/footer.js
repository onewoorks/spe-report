import React from 'react'
import { Row, Col} from 'antd'
import moment from 'moment'

const Footer = () => {
    return (
        <Row justify='space-between' className='footer'>
            <Col span={12}>{moment().format('YYYY')} Hakcipta terpelihara</Col>
            <Col span={12} style={{textAlign: 'right'}}>developed by onewoorks solutions</Col>
        </Row>
    )
}

export default Footer 