// styles/pages/UploadScreenStyles.js
import styled from "styled-components";
import themes from "constants/theme.json";

export const StyledUploadSection = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    font-family: "Inter", sans-serif;
  }

  td {
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 14px;
    background-color: #f9f9f9;
    color: ${({ theme }) => themes[theme]?.primaryText || "#000"};
  }

  tr.separator-row td {
    background-color: #a2a28a;
    height: 34px;
    padding: 0;
    border: none;
  }

  .file-progress-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-bottom: 16px;

    .file-name {
      font-weight: 600;
    }

    .progress-bar {
      flex: 1;
      margin: 0 16px;
    }

    .progress-text {
      font-weight: 500;
      color: black;
    }
  }

  .success-message {
    font-weight: 500;
    color: #2a2a2a;
    margin-bottom: 24px;
  }

  .review-message {
    font-weight: 500;
    margin-bottom: 16px;
  }

  .styled-table-box {
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
  }

  .footer-btn {
    margin-top: 24px;
    text-align: right;
  }
`;
