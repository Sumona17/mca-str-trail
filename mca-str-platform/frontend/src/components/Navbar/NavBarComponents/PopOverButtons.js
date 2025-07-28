import React from "react";
import { Row, Col } from "antd";
import {
  PopOverButtonStyleSignOut,
  PopOverButtonStyleTheme,
} from "styles/components/Navbar";

// import SignOut from "assets/svg/SignOutPopOver.svg";
// import Theme from "assets/svg/ThemePopOver.svg";
// import SignOutDark from 'assets/images/signout-dark.png';
// import ThemeDark from "assets/images/theme-dark.png";
import useMetaData from "context/metaData";

const PopOverButtons = () => {
  const { theme } = useMetaData();
  return (
    <Row>
      <Col span={12}>
        <PopOverButtonStyleSignOut theme={theme}>
          {/* <Button onClick={logout}>
            {
              theme === 'dark'?<img src={SignOutDark} />:<img src={SignOut} />
            }
            <Text>Sign Out</Text>
          </Button> */}
        </PopOverButtonStyleSignOut>
      </Col>
      <Col span={12}>
        <PopOverButtonStyleTheme theme={theme}>
          {/* <Button onClick={onThemeChange}>
            {theme === "dark" ? <img src={ThemeDark} /> : <img src={Theme} />}
            <Text>Theme</Text>
          </Button> */}
        </PopOverButtonStyleTheme>
      </Col>
    </Row>
  );
};

export default PopOverButtons;
