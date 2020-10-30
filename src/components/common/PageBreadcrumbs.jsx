import React from 'react';
import { Breadcrumb} from 'antd'
import { HomeOutlined } from '@ant-design/icons'

const PageBreadcrumbs = (props) => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
            <Breadcrumb.Item>Stok</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default PageBreadcrumbs