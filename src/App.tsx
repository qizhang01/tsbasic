import React from 'react'
import { RenderRoutes } from './router/renderRoutes'
console.log(RenderRoutes)
const App: React.FC = () => {
    return <div>{RenderRoutes(undefined, false)}</div>
}
export default App
