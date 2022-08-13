import React from "react";
import { connect } from "react-redux";
import { ReduxStore } from "../../modal/index";
import { updateUserInfo } from "../../modal/user/action";
import { ILoginProps } from "./interface";

export const Login = (props: ILoginProps) => {
  const { dispatch } = props;
  console.log(props);
  const handleClick = () => {
    dispatch(
      updateUserInfo({
        name: "张三",
      })
    );
  };
  return (
    <>
      <div onClick={handleClick}>1231231</div>
    </>
  );

};

const mapStateToProps = (state: ReduxStore) => ({
  userInfo: state.UseInfo,
});

export default connect(mapStateToProps)(Login);
