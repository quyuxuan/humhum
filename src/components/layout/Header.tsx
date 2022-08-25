import React from 'react'
import { Layout,Avatar,Badge,Dropdown} from 'antd';

const { Header } = Layout;
import "./index.less";
import Menu from "./Menu"


export default function HeaderComponent() {
  return (
    <>
      <Header className='width100 header-color flex-space-between padding-sm'>
        {/* <div>Header</div> */}
        <div className='header_left'>
          预留位置
        </div>
        <div className='header_right'>
          <span >
            <Badge count={1}>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
            </Badge>
          </span>
          <Dropdown overlay={Menu} placement = {"bottom"}>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </Dropdown>
        </div>
      </Header>
    </>
  )
}
