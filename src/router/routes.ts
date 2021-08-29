import React, { lazy } from 'react'
import { RouteInterface } from '../types/route'
//业务页面
const DesignerPage = lazy(() => import('../pages/designer/index.js'))

const RouteMaps: RouteInterface[] = [
    {
        name: 'FirstPage',
        path: '/',
        component: DesignerPage,
    },
    {
        name: 'DesignerPage',
        path: '/designer',
        component: DesignerPage,
    },
]

export default RouteMaps
