export type Route = {
  icon?:string
  path:string
  name:string
  Component:any,
  children?:Route[]
}
