import React from 'react'
import { connect } from 'react-redux'
import LayoutComponent from '../components/layout/index'
import { Outlet } from 'react-router-dom'

export const Container = (props: any) => {
  console.log(props)

  return (
      <LayoutComponent>
        <Outlet />
        {/* <div>
          <Routes>
            {RenderRouter()}
          </Routes>
        </div> */}
      </LayoutComponent>

  )
}
const MapStateTOProps = (state: any) => {
  return {
    count: state.UseInfo,
  }
}

export default connect(MapStateTOProps)(Container)
