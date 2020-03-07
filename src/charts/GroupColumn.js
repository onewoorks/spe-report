import React from 'react'
import { GroupColumnChart } from '@opd/g2plot-react'
import { GroupColumnConfig } from '@antv/g2plot'

const data = [
  {
    jenis_aliran: 'Masuk',
    month: 'Jan.',
    jumlah: 18.9,
  },
  {
    jenis_aliran: 'Masuk',
    month: 'Feb.',
    jumlah: 28.8,
  },
  {
    jenis_aliran: 'Masuk',
    month: 'Mar.',
    jumlah: 39.3,
  },
  {
    jenis_aliran: 'Masuk',
    month: 'Apr.',
    jumlah: 81.4,
  },
  {
    jenis_aliran: 'Masuk',
    month: 'May',
    jumlah: 47,
  },
  {
    jenis_aliran: 'Masuk',
    month: 'Jun.',
    jumlah: 20.3,
  },
  {
    jenis_aliran: 'Masuk',
    month: 'Jul.',
    jumlah: 24,
  },
  {
    jenis_aliran: 'Masuk',
    month: 'Aug.',
    jumlah: 35.6,
  },
  {
    jenis_aliran: 'Keluar',
    month: 'Jan.',
    jumlah: 12.4,
  },
  {
    jenis_aliran: 'Keluar',
    month: 'Feb.',
    jumlah: 23.2,
  },
  {
    jenis_aliran: 'Keluar',
    month: 'Mar.',
    jumlah: 34.5,
  },
  {
    jenis_aliran: 'Keluar',
    month: 'Apr.',
    jumlah: 99.7,
  },
  {
    jenis_aliran: 'Keluar',
    month: 'May',
    jumlah: 52.6,
  },
  {
    jenis_aliran: 'Keluar',
    month: 'Jun.',
    jumlah: 35.5,
  },
  {
    jenis_aliran: 'Keluar',
    month: 'Jul.',
    jumlah: 37.4,
  },
  {
    jenis_aliran: 'Keluar',
    month: 'Aug.',
    jumlah: 42.4,
  },
];


const config: GroupColumnConfig = {
  title: {
    visible: true,
    text: 'Transaksi',
  },
  forceFit: true,
  data,
  xField: 'month',
  yField: 'jumlah',
  yAxis: {
    min: 0,
    title: {
      visible:false
    }
  },
  xAxis: {
    title: {
      visible:false
    }
  },
  label: {
    visible: false,
  },
  groupField: 'jenis_aliran',
}

const GroupColumn = () => {
    const handleChartMount = React.useCallback(chart => {
        console.log(chart)
    },[])

    return <GroupColumnChart {...config} onMount={handleChartMount} />
}

export default GroupColumn