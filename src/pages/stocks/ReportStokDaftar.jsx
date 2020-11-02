import React from 'react'
import ReportStokFilter from '../../components/report/stok/ReportStokFilter.jsx'

const ReportDaftar = (props) => {
    let resturl = props.match.url
    let reportpage = props.match.params.stokpage
    
    return (
        <ReportStokFilter resturl={resturl} report={reportpage} />
    )
}

export default ReportDaftar