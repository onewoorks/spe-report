import React from 'react'

import Dashboard from './pages/dashboard'
import PageEdit from './pages/stocks/edit_stock'
import UserForm from './pages/Users/UserForm.jsx'

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
        path: '/new-user',
        exact: true,
        main: () => <UserForm />
    }
]

export default routes