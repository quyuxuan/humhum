import React from "react";

const Home =  React.lazy(()=>import("../pages/Home"));

export type Route = {
  icon?:string
  path:string
  name:string
  component:any,
  children?:Route[]
}
export const routes:Route[] = [{
  icon:'home',
  path:'/',
  name:"主页",
  component:Home,
}]

export const ContainerRouters:Route[] = [{
  icon:'home',
  path:'/con',
  name:"剧本",
  component:Home,
}]