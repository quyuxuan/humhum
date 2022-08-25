import React from 'react'
import { connect } from 'react-redux'
import { ReduxStore } from '../../modals/index'
import { updateUserInfo } from '../../modals/user/action'
import { ILoginProps } from './interface'

export const Login = (props: ILoginProps) => {
  const { dispatch } = props
  const handleClick = () => {
    dispatch(
      updateUserInfo({
        name: '张三',
      })
    )
  }
  return (
    <>
      <div onClick={handleClick}>123123444</div>
    </>
  )
}

const mapStateToProps = (state: ReduxStore) => ({
  userInfo: state.UseInfo,
})

export default connect(mapStateToProps)(Login)
