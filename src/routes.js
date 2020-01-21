import React from 'react'

import PageEdit from './pages/stocks/edit_stock'

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home</div>,
        main: () => <h2>Home</h2>
    }, 
    {
        path: '/edit',
        exact: true,
        sidebar: () => <div>edit</div>,
        main: () => <PageEdit />
    }
]

export default routes