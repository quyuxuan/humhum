import React from "react";
import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";
import LayoutComponent from "../../components/layout/index";

export const Home = (props: any) => {
  console.log(props);
  return (
    <>
      <LayoutComponent>
        
      </LayoutComponent> 

    </>
  );
};
const MapStateTOProps = (state: any) => {
  return {
    count: state.UseInfo,
  };
};

export default connect(MapStateTOProps)(Home);
