import {combineReducers} from 'redux';
import UseInfo from './user/reducer';
import {RUserInfo} from "./user/interface"
export interface ReduxStore {
  /**
   * 用户信息集合
   */
   UseInfo:RUserInfo
}

export default combineReducers({
  UseInfo,
});
