import React from 'react'
import { LineChart } from '@opd/g2plot-react'
import { LineConfig } from '@antv/g2plot'

const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

const config: LineConfig = {
  height: 400,
  title: {
    visible: false,
    text: '配置折线数据点样式',
  },
  description: {
    visible: false,
    text: '自定义配置趋势线上数据点的样式',
  },
  padding: 'auto',
  forceFit: true,
  xField: 'year',
  yField: 'value',
  label: {
    visible: true,
    type: 'point',
  },
  point: {
    visible: true,
    size: 5,
  },
  xAxis: {
    tickCount: 10,
  },
  smooth:true,
  data: data
}

const Histogram = () => {
    const handleChartMount = React.useCallback(chart => {
        console.log(chart)
    },[])
    
    return <LineChart {...config} onMount={handleChartMount} />
}

export default Histogram