import React, { Suspense } from 'react'
import { RouteInterface } from '../types/route'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import RouteMaps from './routes'

export const RenderRoutes = (routes: RouteInterface[] | undefined, authed: boolean) => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {RouteMaps.map(route => {
                        const { path, component, name } = route
                        return <Route key={name} exact path={path} component={component} />
                    })}
                </Switch>
            </Suspense>
        </Router>
    )
}
