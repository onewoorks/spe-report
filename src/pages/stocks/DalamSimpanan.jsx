import React from 'react'
import {
    PageHeader,
    Row,
    Col,
    Card,
    Table,
    Tabs
} from 'antd'

import PageBreadcrumbs from '../../components/common/PageBreadcrumbs.jsx'
import ReportStokFilter from '../../components/report/stok/filter.jsx'
import ReportStokDataTables from '../../components/report/stok/data_tables.jsx'

const StocksDalamSimpanan = (props) => {
    return (
        <div>
            <PageBreadcrumbs />
            <PageHeader title="Stok Dalam Simpanan" />
            <ReportStokFilter />
            <ReportStokDataTables />
        </div>
    )
}

export default StocksDalamSimpanan
