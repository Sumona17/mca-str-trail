import styled from "styled-components";
import { Card } from "antd";

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 1px;
  right: 1px;
  z-index: 1000;
`;

export const StyledCard = styled(Card)`
  width: 365px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  .ant-card-head {
    background: linear-gradient(161.5deg, #36affb -15.49%, #065281 98.81%);
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    border-radius: 10px 10px 0 0;
  }

  .ant-card-head-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .title-container {
    display: flex;
    align-items: center;
  }

  .icon-title {
    margin-right: 10px;
    height: 35px;
    width: 35px;
  }

  .close-icon {
    margin-left: auto;
    cursor: pointer;
    height: 20px; /* updated */
    width: 20px;  /* updated */
    filter: brightness(0) invert(1); /* makes SVG white */
  }

  .chat-body {
    display: flex;
    flex-direction: column;
    height: 300px;
    overflow-y: auto;
    padding: 10px;

    .message {
      max-width: 80%;
      padding: 10px;
      border-radius: 10px;
      font-size: 12px;
      font-family: "Inter", sans-serif;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      margin: 5px 0;
      word-break: break-word;
      white-space: pre-wrap;
    }

    .left {
      background-color: #f5f5f5; /* updated to light grey */
      align-self: flex-start;
      font-weight: 450;
      border: 1px solid #e0e0e0; /* softened border */
    }

    .right {
      background-color: #1890ff;
      color: white;
      align-self: flex-end;
    }

    .typing {
      font-style: italic;
      opacity: 0.8;
      background: transparent;
      box-shadow: none;
    }
  }

  .input-wrapper {
    display: flex;
    align-items: flex-end;
    padding: 8px 10px; /* slightly more padding */
    background-color: #fff;
    border-top: 1px solid #eaeaea;

    textarea {
      flex-grow: 1;
      resize: none;
      border: none;
      font-size: 11px; /* slightly larger font */
      padding: 11px; /* more padding for a bigger box */
      font-family: "Inter", sans-serif;
      max-height: 120px;
      overflow-y: auto;
      line-height: 1.5;
      outline: none;
      background-color: #fafafa; /* light input background */
      border-radius: 6px;
    }

    .icon {
      margin-left: 15px;
      cursor: pointer;
      align-self: center;
      width: 18px;
      height: 18px;
    }
  }
`;

