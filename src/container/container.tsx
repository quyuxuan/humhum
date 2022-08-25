import React from "react";
import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";
import LayoutComponent from "../components/layout/index";
import {ContainerRouters} from "../roouter/index"
import {  Routes, Route } from "react-router-dom";

export const Container = (props: any) => {
  console.log(props);
  return (
    <>
      <LayoutComponent>
        <Routes>
        {
          ContainerRouters&&ContainerRouters.map((item)=>{
            return  <Route path={item.path} element={<item.component />} />
          })
        }
        </Routes>
      </LayoutComponent> 

    </>
  );
};
const MapStateTOProps = (state: any) => {
  return {
    count: state.UseInfo,
  };
};

export default connect(MapStateTOProps)(Container);
