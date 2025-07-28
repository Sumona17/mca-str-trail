import React, { useState, useEffect, useRef } from "react";
import { ChatContainer, StyledCard } from "styles/pages/ChatBot";
import attachIcon from "assets/svg/attach.svg";
import sendIcon from "assets/svg/send.svg";
import ChatBotIcon from "assets/svg/chatbot.svg";
import CloseIcon from "assets/svg/close.svg";

const ChatBot = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  const closeChatbox = () => setIsVisible(false);

  useEffect(() => {
    if (step === 0) {
      setMessages([
        { type: "left", text: "Hello, I'm Astra." },
        {
          type: "left",
          text: "I see that you have access to data for 40,182 retirement plan records. How can I help you today?",
        },
      ]);
      setTimeout(() => {
        setInputValue("How many plans have automatic enrollment provisions?");
      }, 1500);
    }
  }, [step]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { type: "right", text: inputValue }];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    let replyMessages = [];
    let nextInput = "";
    let nextStep = step + 1;

    if (step === 0) {
      replyMessages = [
        {
          type: "left",
          text: "There are 23,707 active retirement plans with automatic enrollment provisions.",
        },
        {
          type: "left",
          text: "Is there anything else you need?",
        },
      ];
      nextInput =
        "Yes.  How many of these plans have a deferral increase feature?";
    } else if (step === 1) {
      replyMessages = [
        {
          type: "left",
          text: (
            <>
              Of course... of the 23,707 plans, 15,804 have an{" "}
              <a style={{ textDecoration: "underline", color: "#1890ff" }}>
                annual automatic deferral increase
              </a>
              .
            </>
          ),
        },
      ];
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, ...replyMessages]);
      setInputValue(nextInput);
      setStep(nextStep);
    }, 1500); // Simulated typing delay
  };

  return (
    isVisible && (
      <ChatContainer>
        <StyledCard
          title={
            <div className="ant-card-head-title">
              <div className="title-container">
                <img
                  src={ChatBotIcon}
                  alt="ChatBot icon"
                  className="icon-title"
                />
                <span>Astra</span>
              </div>
              <img
                src={CloseIcon}
                alt="Close"
                className="close-icon"
                onClick={closeChatbox}
              />
            </div>
          }
        >
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="message left typing">
                <em>Astra is typing...</em>
              </div>
            )}
          </div>
          <div className="input-wrapper">
            <textarea
              rows={2}
              value={inputValue}
              placeholder="Type your message..."
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              style={{
                padding: "10px",
                fontSize: "12px",
                resize: "none",
              }}
            />
            <img src={attachIcon} alt="Attach" className="icon" />
            <img
              src={sendIcon}
              alt="Send"
              className="icon"
              onClick={handleSend}
              style={{ cursor: "pointer" }}
            />
          </div>
        </StyledCard>
      </ChatContainer>
    )
  );
};

export default ChatBot;
