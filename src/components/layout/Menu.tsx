import React from 'react';
import {Menu} from "antd";
import {MenuInfo} from "rc-menu/lib/interface";
import {LOGOUT} from "./menuType";

export const MenuComponent =() => {
  const handleClickMenuItem = (Item:MenuInfo)=>{
    console.log(Item)
    const {key} = Item;
    switch (key){
      case LOGOUT:
        console.log('执行退出登录');
        break;
      default:
        console.log('没有相应的处理');
    }
  }
  return (
    <Menu
    onClick={handleClickMenuItem}
    items={[
      {
        label:"退出登录",
        key: LOGOUT,
      },
    ]}
  />
  )
}

export default MenuComponent;