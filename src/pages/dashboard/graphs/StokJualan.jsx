import React from 'react'
import axios from 'axios'
import { Line } from '@ant-design/charts'

const StokJualan = (props) => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        asyncFetch()
    }, [])

    const asyncFetch = () => {
        axios
            .post(
                `${process.env.REACT_APP_REPORT_URI}/statistik/stok-jualan-terkini-cawangan`
            )
            .then((response) => {
              setData(response.data)
            })
            .catch((error) => {
                console.log('Data failed FETCH', error)
            })
    }
    const config = {
        height: props.height,
        data,
        xField: 'tarikh',
        yField: 'jualan',
        seriesField: 'kedai',
        yAxis: {
            label: {
                formatter: (v) =>
                    `${v}`.replace(
                        /\d{1,3}(?=(\d{3})+$)/g,
                        (s) => `${s},`
                    ),
            },
        },
        legend: { position: 'right-top' },
        color: ['#1979C9', '#D62A0D', '#FAA219'],
    }
    return <Line {...config} />
}
export default StokJualan
