import React from 'react'

import Dashboard from './pages/dashboard'
import PageEdit from './pages/stocks/edit_stock'
import UserForm from './pages/Users/UserForm.jsx'

import StocksDalamSimpanan from './pages/stocks/DalamSimpanan.jsx'

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>Dashboard</div>,
        main: () => <Dashboard />
    }, 
    { 
        path: '/stok/dalam-simpanan',
        exact: true,
        main: () => <StocksDalamSimpanan />
    },
    {
        path: '/edit',
        exact: true,
        sidebar: () => <div>edit</div>,
        main: () => <PageEdit />
    }, 
    { 
        path: '/new-user',
        exact: true,
        main: () => <UserForm />
    }
]

export default routes