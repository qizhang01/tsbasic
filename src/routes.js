import React, { lazy } from 'react';

//业务页面
const IndexPage = lazy(() => import('./pages/index'));
const ListPage = lazy(() => import('./pages/list/index'));
const DesignerPage = lazy(() => import('./pages/designer'));

const RouteMaps =  [
    {
        name: 'IndexPage',
        path: '/',
        component: IndexPage,
    },
    {
        name: 'ListPage',
        path: '/listview',
        component: ListPage,
    },
    {
        name: 'DesignerPage',
        path: '/designer',
        component: DesignerPage,
    },
]
    
export default RouteMaps;