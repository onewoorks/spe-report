import React from 'react'
import { Column } from '@ant-design/charts'

const StokCawangan = (props) => {
    const data = [
        {
            year: 'Ariffin Dungun',
            value: 3,
            type: 'Emas',
        },
        {
            year: 'Ariffin Kemaman',
            value: 4,
            type: 'Emas',
        },
        {
            year: 'Ariffin Keratong',
            value: 3.5,
            type: 'Emas',
        },
        {
            year: 'Ariffin Muadzam',
            value: 5,
            type: 'Emas',
        },
        {
            year: 'Ariffin Jalan Mahkota',
            value: 4.9,
            type: 'Emas',
        },
        {
            year: 'Ariffin Kuantan',
            value: 6,
            type: 'Emas',
        },
        {
            year: 'Ariffin Dungun',
            value: 3,
            type: 'Bukan Emas',
        },
        {
            year: 'Ariffin Kemaman',
            value: 4,
            type: 'Bukan Emas',
        },
        {
            year: 'Ariffin Keratong',
            value: 3.5,
            type: 'Bukan Emas',
        },
        {
            year: 'Ariffin Muadzam',
            value: 5,
            type: 'Bukan Emas',
        },
        {
            year: 'Ariffin Jalan Mahkota',
            value: 4.9,
            type: 'Bukan Emas',
        },
        {
            year: 'Ariffin Kuantan',
            value: 6,
            type: 'Bukan Emas',
        },
    ]
    const config = {
        height: props.height,
        data,
        isStack: true,
        xField: 'year',
        yField: 'value',
        seriesField: 'type',
        color: ['#f89234', '#c93031'],
    }
    return <Column {...config} />
}
export default StokCawangan
