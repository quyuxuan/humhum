import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./Header";
import SiderComponent from "./sider";
import { connect } from "react-redux";
import { ReduxStore } from "src/modals/index";

const { Content } = Layout;

const LayoutComponent = (props: any) => {
  const { children } = props;

  return (
    <Layout className="width100">
      <SiderComponent />
      <Layout className="site-layout">
        <HeaderComponent />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

const mappStateToProps = (state: ReduxStore) => ({
  userInfo: state.UseInfo,
});

export default connect(mappStateToProps)(LayoutComponent);
