import React from 'react'
import { Column } from '@ant-design/charts'


const StokCawangan = (props) => {
    
    const config = {
        height: props.height,
        data: props.data,
        isStack: false,
        xField: 'kedai',
        yField: 'modal',
        yAxis: {
            label: {
                formatter: (v) =>
                    `${v}`.replace(
                        /\d{1,3}(?=(\d{3})+$)/g,
                        (s) => `${s},`
                    ),
            },
        },
        seriesField: 'jenis',
        color: ['#f89234', '#c93031'],
    }

    
    return <Column {...config} />
}
export default StokCawangan
