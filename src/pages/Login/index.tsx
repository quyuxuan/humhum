import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { ReduxStore } from '../../modals/index'
import { updateUserInfo } from '../../modals/user/action'
import { ILoginProps } from './interface'
import useTypewriter from 'react-typewriter-hook'
import './index.less'

export const Login = (props: ILoginProps) => {
  const { dispatch } = props
  const [writeName, setWriteName] = useState<string>('')
  const intervalRef = useRef<any>(null)
  const name = useTypewriter(writeName)
  const MagicOcean = ['仙女小姐姐爱你哦,可以做我女朋友嘛?,好呀,好好好']
  console.log(123123123)
  useEffect(() => {
    intervalRef.current = setTimeout(() => {
      setWriteName(MagicOcean[0])
    }, 1000)
  }, [writeName])
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
      <p className="cursor" style={{ fontSize: 18 }}>{name}</p>
      <div className='cricle scale-up-center' ></div>
    </>
  )
}

const mapStateToProps = (state: ReduxStore) => ({
  userInfo: state.UseInfo,
})

export default connect(mapStateToProps)(Login)
