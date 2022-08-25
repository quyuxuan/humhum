import React from 'react'
import { Layout, Menu } from "antd";
const {Sider} = Layout
export default function sider() {
  const onClick = ()=>{
   console.log(111);
  }
  return (
    <>
      <Sider trigger={null} >
        <div className="logo" />
        <Menu
          onClick={onClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={[
            {
              label: "我的剧本",
              key: "123",
            },
          ]}
        />
      </Sider>
    </>
  )
}
