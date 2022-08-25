import React, { ReactNode } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { routes as Routers } from './router/index'
import { Route as RouteItem } from 'src/router/interface'
import './App.less'

// import { ContainerRouters } from "./roouter";
export const App = () => {
  const renderRouter = (routes:RouteItem[]):ReactNode => {
    return routes && routes.map((item:RouteItem) => {
      const { Component, name, path, children } = item
      return (
      <Route key={name} path={path} element={<Component />} >
        {children && renderRouter(children)}
      </Route>
      )
    })
  }
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {renderRouter(Routers)}
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}
export default App
