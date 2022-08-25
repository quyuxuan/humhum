import React from 'react'
import { Route } from './interface'
const Home = React.lazy(() => import('../pages/Home'))
const Login = React.lazy(() => import('../pages/Login'))
const Container = React.lazy(() => import('../container/container'))

export const routes:Route[] = [{
  icon: '',
  path: '/Login',
  name: '登录',
  Component: Login,
}, {
  icon: '',
  path: '/hum',
  name: '主页',
  Component: Container,
  children: [{
    path: 'con',
    name: '主页',
    Component: Home,
  }]
}]
