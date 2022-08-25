import React from "react";

const Container =  React.lazy(()=>import("../container/container"));

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
  component:Container,
}]

export const ContainerRouters = [{
  icon:'home',
  path:'/',
  name:"剧本",
  component:Container,
}]