import React from 'react'
import { Column } from '@ant-design/charts'


const StokCawangan = (props) => {
    
    const config = {
        height: props.height,
        data: props.data,
        isStack: false,
        xField: 'kedai',
        yField: 'modal',
        seriesField: 'jenis',
        color: ['#f89234', '#c93031'],
    }

    
    return <Column {...config} />
}
export default StokCawangan
