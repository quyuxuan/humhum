import React from 'react'
import { Layout } from 'antd'
import HeaderComponent from './Header'
import SiderComponent from './sider'
import { connect } from 'react-redux'
import { ReduxStore } from 'src/modals/index'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const LayoutComponent = (props: any) => {
  console.log(props)
  return (
    <Layout className="width100">
      <SiderComponent />
      <Layout className="site-layout">
        <HeaderComponent />
        <Content
          className="site-layout-background"
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}

const mappStateToProps = (state: ReduxStore) => ({
  userInfo: state.UseInfo,
})

export default connect(mappStateToProps)(LayoutComponent)
