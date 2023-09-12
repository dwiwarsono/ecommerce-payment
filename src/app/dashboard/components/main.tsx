"use client";
 
import React, { ReactNode } from "react";
 
import { Layout, theme } from "antd";
 
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
 
import items, { MenuItem } from "./menu";
import Sidebar from "./sidebar";
 
const { Header, Content, Footer } = Layout;
 
type Props = {
  children: ReactNode,
  session: Session | null,
  user: {
    id: string,
    name: string,
    email: string,
    image: string | null,
    role: string,
  } | null,
  menu: MenuItem[],
};
 
const Main: React.FC<Props> = ({ children, session, menu }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 
  const pathname = usePathname(); //use this to get url pathname to make sure active page selected when user hard refresh some page in dashboard
 
  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      <Sidebar defaultSelectedKeys={[pathname]} items={menu} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          E-Commerce Cart ©2023 Created by Tahu Coding
        </Footer>
      </Layout>
    </Layout>
  );
};
 
export default Main;