import React from 'react'
// import { Row, Col, Card} from 'antd'

import ReportStokFilter from '../../components/report/stok/filter.jsx'

const ReportStokBuang = (props) => {
    let matchUrl = props.match.url
    return (
        <>
            <ReportStokFilter resturl={matchUrl} report={props.match.params.stokpage} />
        </>
    )
}

export default ReportStokBuang