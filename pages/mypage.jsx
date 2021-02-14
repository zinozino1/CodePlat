import React, { useCallback, useState } from "react";
import { Divider, Row, Col, Button, Form, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  CalendarOutlined,
  LinkOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MypageLayout from "../components/layout/MypageLayout";
import EditProfileForm from "../components/mypage/EditProfileForm";
import MyActivityTemplate from "../components/mypage/MyActivityTemplate";
import SkillFilterForm from "../components/common/contents/SkillFilterForm";
import styled from "styled-components";
import Head from "next/head";
import EditProfile from "../components/mypage/EditProfile";

const MenuWrapper = styled.div`
  display: flex;
  .menu-bar {
    flex: 1;
    border: 1px solid red;
    width: 200px;
  }
  .menu-content {
    flex: 4;
    border: 1px solid black;
  }
`;

const mypage = () => {
  const [currentMenu, setCurrentMenu] = useState("profile");
  const onChangeCurrentMenu = useCallback((e) => {
    setCurrentMenu(e.key);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>마이페이지</title>
      </Head>

      <MypageLayout>
        <MenuWrapper>
          <div className="menu-bar">
            <Menu
              style={{ height: "90vh", border: "1px solid black" }}
              defaultSelectedKeys={["profile"]}
              //defaultOpenKeys={["sub1"]}
              onClick={onChangeCurrentMenu}
            >
              <Menu.Item key="profile" icon={<UserOutlined />}>
                프로필 수정
              </Menu.Item>
              <Menu.Item key="activity" icon={<AppstoreOutlined />}>
                내 활동
              </Menu.Item>
              <Menu.Item key="note" icon={<MailOutlined />}>
                쪽지함
              </Menu.Item>
            </Menu>
          </div>
          <div className="menu-content">
            {currentMenu === "profile" && <EditProfile />}
            {currentMenu === "activity" && <MyActivityTemplate />}
            {currentMenu === "note" && <div>note</div>}

            {/* <div style={{ border: "0.2px solid white", margin: "10px" }}></div>
            <MyActivityTemplate></MyActivityTemplate> */}
          </div>
        </MenuWrapper>
      </MypageLayout>
    </>
  );
};

export default mypage;
