import React from 'react'
import { Row, Col, Statistic, Card, Spin } from 'antd'

const ReportStokStats = (props) => {
    let loading = props.loading
    let ringkasan = props.ringkasan
    const RingkasanStok = () => {
        let stok_kuantiti = 0
        let stok_nilai = 0
        let modal_emas = 0
        let modal_bukan_emas = 0

        ringkasan.map((x, index) => {
            stok_kuantiti += parseInt(x.belum_jual)
            stok_nilai += parseFloat(x.modal_belum_jual)
            modal_emas += parseFloat(x.modal_emas_belum_jual)
            modal_bukan_emas += parseFloat(x.modal_bukan_emas_belum_jual)
        })

        return (
            <Row gutter={[16, 16]}>
                <Col span="12">
                    <Card>
                        <Spin spinning={loading}>
                            <Statistic
                                title="Jumlah Stok Pilihan (Kuantiti)"
                                value={stok_kuantiti}
                                precision={0}
                                valueStyle={{ color: '#3f8600' }}
                                suffix={'unit'}
                            />
                        </Spin>
                    </Card>
                </Col>

                <Col span="12">
                    <Card>
                        <Spin spinning={loading}>
                            <Statistic
                                title="Jumlah Stok Pilihan (Nilai)"
                                value={stok_nilai}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={'RM '}
                            />
                        </Spin>
                    </Card>
                </Col>

                <Col span="12">
                    <Card>
                        <Spin spinning={loading}>
                            <Statistic
                                title="Modal Emas"
                                value={modal_emas}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={'RM '}
                            />
                        </Spin>
                    </Card>
                </Col>

                <Col span="12">
                    <Card>
                        <Spin spinning={loading}>
                            <Statistic
                                title="Modal Bukan Emas"
                                value={modal_bukan_emas}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={'RM '}
                            />
                            </Spin>
                        </Card>
                </Col>
            </Row>
        )
    }
    return (
        <>
            <RingkasanStok />
        </>
    )
}

export default ReportStokStats
