import React from "react";
import {useNavigate} from "react-router-dom"
export const Page = ()=>{
  const nav = useNavigate()
  return (
    <div onClick={()=>{
      nav("/")
    }}>
      4556
    </div>
  )
}
export default Page;