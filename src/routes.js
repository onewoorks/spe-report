import React from 'react'

import Dashboard from './pages/dashboard'
import PageEdit from './pages/stocks/edit_stock'

import ReportStock from  './pages/stocks/ReportStock.jsx'

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>Dashboard</div>,
        main: () => <Dashboard />
    }, 
    {
        path: '/edit',
        exact: true,
        sidebar: () => <div>edit</div>,
        main: () => <PageEdit />
    }, 
    {
        path: '/stok/:stokpage?',
        component: ReportStock
    }
]

export default routes