import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Container from './container/container'
import Login from './pages/Login'
import store from './store'
import './App.less'

// import { ContainerRouters } from "./roouter";
export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Home" element={<Container />}>
            <Route path="1" element={<Login />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}
export default App
