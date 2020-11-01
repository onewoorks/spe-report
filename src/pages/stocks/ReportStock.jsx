import React from 'react'
import { PageHeader } from 'antd'
import { Route } from 'react-router-dom'

import StockDashboardStock from '../stocks/DashboardStock.jsx'
import PageBreadcrumbs from '../../components/common/PageBreadcrumbs.jsx'
import ReportTarikhAkhir from './ReportTarikhAkhir'
// import ReportStokFilter from '../../components/report/stok/filter.jsx'
import ReportStokDetail from './ReportStockDetail'
import ReportStokBuang from './ReportStokBuang'
import ReportStokDaftar from './ReportStokDaftar'
import ReportStokJual from './ReportStokJual'
import ReportStokInvoisBelian from './ReportStokInvoisBelian'

const ReportStock = (props) => {
    const CleanTitle = (title_) => {
        let clean = title_.replace(/-/g, ' ')
        return clean;
    }

    let title = props.match.params.stokpage
    if (typeof title !== 'undefined') {
        return (
            <div>
                <PageBreadcrumbs />
                <div style={{textTransform:'capitalize'}}><PageHeader title={CleanTitle(title)} /></div>
                <Route exact path="/stok/stok-akhir" component={() => <ReportTarikhAkhir {...props} />} />
                <Route exact path="/stok/stok-daftar" component={() => <ReportStokDaftar {...props} />} />
                <Route exact path="/stok/stok-jual" component={() => <ReportStokJual {...props} />} />
                <Route exact path="/stok/stok-akhir-detail/:kedai/:tarikh/:tag" component={ReportStokDetail} />
                <Route exact path="/stok/stok-buang" component={() => <ReportStokBuang {...props} />} />
                <Route exact path="/stok/stok-invois-belian" component={() => <ReportStokInvoisBelian {...props} />} />
            </div>
        )
    } else {
        return <StockDashboardStock />
    }
}

export default ReportStock
