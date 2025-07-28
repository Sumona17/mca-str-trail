import React, { useState } from "react";

import { Container } from "styles/pages/STR";

import { PrivateFooterbox } from "styles/components/Footer";
import ChatBot from "pages/ChatBot";
import useMetaData from "context/metaData";

const PrivateFooter = () => {
  const { theme } = useMetaData();

  const [openChat, setOpenChat] = useState(false);

  const toggleChat = () => {
    setOpenChat(!openChat);
  };
  return (
    <PrivateFooterbox theme={theme}>
      <div>
        <Container>
          <hr />
        </Container>
      </div>
      {openChat && <ChatBot toggleChat={toggleChat} />}
    </PrivateFooterbox>
  );
};

export default PrivateFooter;
