import {UPDATE_USER_INFO} from "./actionType";
export const updateUserInfo = (userInfo: any) => ({
  type: UPDATE_USER_INFO,
  data:userInfo
});