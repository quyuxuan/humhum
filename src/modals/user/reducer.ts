import { RUserInfo } from './interface'
import { UPDATE_USER_INFO } from './actionType'
import { initState } from './constant'

export default function UseInfo (state: RUserInfo = initState, action: any) {
  const { type } = action
  switch (type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
      }
    default:
      return { ...state }
  }
}
