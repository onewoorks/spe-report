import React from 'react'
import { PageHeader } from 'antd'
import { Route } from 'react-router-dom'

import StockDashboardStock from '../stocks/DashboardStock.jsx'
import PageBreadcrumbs from '../../components/common/PageBreadcrumbs.jsx'
import ReportStokFilter from '../../components/report/stok/filter.jsx'
import ReportStokDetail from './ReportStockDetail'

const ReportStock = (props) => {
    let title = props.match.params.stokpage
    if (typeof title !== 'undefined') {
        return (
            <div>
                <PageBreadcrumbs />
                <PageHeader title={title} />
                <Route exact path="/stok/stok-akhir" component={ReportStokFilter} />
                <Route exact path="/stok/stok-akhir-detail/:kedai/:tarikh/:tag" component={ReportStokDetail} />
            </div>
        )
    } else {
        return <StockDashboardStock />
    }
}

export default ReportStock
