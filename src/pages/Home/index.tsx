import React from "react";
import { connect } from "react-redux";
import {useNavigate} from "react-router-dom"
export const Home = (props:any)=>{
  console.log(props);
  const nav = useNavigate()
  return (
    <div onClick={()=>{
      nav("/page")
    }}>
      123
    </div>
  )
}
const MapStateTOProps = (state:any)=>{
  return {
    count:state.UseInfo
  }
}

export default connect(MapStateTOProps)(Home);