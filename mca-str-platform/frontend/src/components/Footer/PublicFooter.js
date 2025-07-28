import React, { useState } from "react";

import { PublicFooterBox, Container } from "styles/components/Footer";

import useMetaData from "context/metaData";

import ChatBot from "pages/ChatBot";
import Chat from "assets/images/chat.png";

const PublicFooter = () => {
  const { theme } = useMetaData();

  const [openChat, setOpenChat] = useState(false);

  const toggleChat = () => {
    setOpenChat(!openChat);
  };

  return (
    <PublicFooterBox theme={theme}>
      <Container>
        <div className="footersection">
          <div></div>

          <div
            onClick={toggleChat}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#276070",
              marginLeft: "20px",
            }}
          >
            <img
              src={Chat}
              alt="Chat Icon"
              style={{ height: "15px", marginRight: "8px" }}
            />
            <span style={{ fontSize: "14px", marginBottom: 5 }}>Astra</span>
          </div>

          {openChat && <ChatBot toggleChat={toggleChat} />}
        </div>
      </Container>
    </PublicFooterBox>
  );
};

export default PublicFooter;
