import styled from "styled-components";
import themes from "constants/theme.json";

export const FormSection = styled.div`
  margin-bottom: 32px;
   .logobox {
    max-width: 40px;
    max-height: 40px;
    
    @media (max-width: 767px) {
      max-width: 32px;
      max-height: 32px;
    }
  }
  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 16px;
    
    .section-title {
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => themes[theme].searchQuoteTitle};
      margin: 0;
      font-family: "Inter", sans-serif;
    }
    
    .action-info {
      font-size: 14px;
      color: #666;
      font-style: italic;
      margin-left: 16px;
    }
  }

  .ant-card {
    border-color: ${({ theme }) => themes[theme].searchQuoteFormBorder};
    box-shadow: 0px 6px 18px -2px #18181C1A;
    background: ${({ theme }) => themes[theme].searchQuoteCardBg}; 
    border-radius: 8px;
  }

  label {
    font-size: 13px !important;
    font-weight: 500;
    line-height: 19.5px;
    color: #adacb0 !important;
    font-family: "Inter", sans-serif;
  }
  
  input {
    box-shadow: 0px 1.5px 4px -1px #9c9c9f;
    font-family: "Inter", sans-serif;
    border: none;
  }
  
  .search-btn-box {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
  }
  
  .search-btn {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.051px;
    text-align: center;
    color: #fff !important;
    font-family: "Inter", sans-serif;
    background-color: ${({ theme }) => `${themes[theme].searchQuoteBtn} !important`};
    border: 1px solid #000 !important;
    height: 48px;
    min-width: 110px;
  }
  
  .resetbtn {
    font-size: 14px;
    font-weight: 475;
    line-height: 20px;
    letter-spacing: -0.05000000074505806px;
    text-align: left;
    margin-left: 16px;
    color: #000 !important;
    font-family: "Inter", sans-serif;
    height: 48px;
    min-width: 110px;
    background-color: #fff;
    border: 1px solid #ececed !important;
  }
  
  img {
    cursor: pointer;
  }
`;

export const SearchPolicySection = styled.div`
  min-height: 100vh;
  padding: 16px 0;
  margin-top: 20px;
  .topsection {
    padding: 30px 0px;
    .subtext {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: -0.181px;
      color: ${({ theme }) => themes[theme].searchQuoteSectionHeading};
      font-family: "Inter", sans-serif;
      margin: 12px 0px;
    }
    .search-title {
      display: flex;
      justify-content: space-between;
    }
  }
  
  .insuredBox {
    display: flex;
    justify-content: space-between;
    &.insuredIcon {
      display: flex;
      gap: 17px;
      .image {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export const SearchPolicyTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0px;
  line-height: 34px;
  letter-spacing: -0.02em;
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => themes[theme].searchQuoteTitle};
`;

export const DashboardHeader = styled.div`
  .welcome-section {
    .date-info {
      font-size: 14px;
      color: #666;
      margin-top: 8px;
      font-family: "Inter", sans-serif;
    }
  }
`;

export const DashboardStats = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  
  .stat-item {
    text-align: right;
    
    .stat-label {
      font-size: 14px;
      color: #666;
      margin-bottom: 4px;
      font-family: "Inter", sans-serif;
    }
    
    .stat-value {
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => themes[theme].searchQuoteTitle};
      font-family: "Inter", sans-serif;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-end;
  }
`;



export const FilterSection = styled.div`
  margin-bottom: 4px;
  padding: 15px;
  margin-top: 20px;
  .ant-select {
    .ant-select-selector {
      border: 1px solid #d9d9d9;
      border-radius: 6px;
      font-family: "Inter", sans-serif;
         height: 34px;
         width: 134px;
    padding: 0 16px;
    font-size: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
  
  .ant-input-search {
    .ant-input {
      border-radius: 6px;
      font-family: "Inter", sans-serif;
         height: 34px;
    padding: 0 16px;
    font-size: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .ant-input-search-button {
      border-radius: 0 6px 6px 0;
      background-color: ${({ theme }) => themes[theme].searchQuoteBtn || '#1890ff'};
      border-color: ${({ theme }) => themes[theme].searchQuoteBtn || '#1890ff'};
          height: 34px;
    padding: 0 16px;
    font-size: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
  
  .ant-picker {
    border-radius: 6px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }
  
  .reset-btn {
    background-color:rgb(231, 227, 227);
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    color: #656;
    height: 34px;
    padding: 0 16px;
    font-size: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
      border-color: ${({ theme }) => themes[theme].searchQuoteBtn || '#1890ff'};
      color: ${({ theme }) => themes[theme].searchQuoteBtn || '#1890ff'};
    }
  }
  
  .download-btn {
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    color: #656;
        height: 34px;
    padding: 0 16px;
    font-size: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
      border-color: ${({ theme }) => themes[theme].searchQuoteBtn || '#1890ff'};
      color: ${({ theme }) => themes[theme].searchQuoteBtn || '#1890ff'};
    }
  }
  
  @media (max-width: 1200px) {
    .ant-row {
      flex-direction: column;
      align-items: flex-start !important;
      gap: 16px;
    }
  }
  
  @media (max-width: 768px) {
    .ant-col {
      width: 100% !important;
    }
    
    .ant-select,
    .ant-input-search,
    .ant-picker {
      min-width: 140px;
    }
  }
`;

export const ActionSection = styled.div`
  margin: 16px 0 24px 0;
  
  .action-buttons {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
    
    .ant-btn {
      border-radius: 6px;
      font-family: "Inter", sans-serif;
      font-weight: 500;
          height: 34px;
    padding: 0 16px;
    font-size: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      
      &.ant-btn-primary {
        background-color: ${({ theme }) => themes[theme].searchQuoteBtn || '#1890ff'};
        border-color: ${({ theme }) => themes[theme].searchQuoteBtn || '#1890ff'};
      }
      
      &.ant-btn-default {
        border-color: #d9d9d9;
        color: #666;
        
        &:hover {
          border-color: ${({ theme }) => themes[theme].searchQuoteBtn || '#1890ff'};
          color: ${({ theme }) => themes[theme].searchQuoteBtn || '#1890ff'};
        }
      }
    }
  }
`;

export const AlertBanner = styled.div`
  margin-bottom: 24px;
  
  .ant-alert {
    border-radius: 8px;
    background-color: #fff7e6;
    border: 1px solid #ffd591;
    padding: 12px 20px;
    
    .ant-alert-message {
      font-family: "Inter", sans-serif;
      font-size: 14px;
      color: #8c4400;
      margin: 0;
    }
    
    .ant-alert-action {
      margin-left: auto;
    }
  }
`;

export const BannerImage = styled.div`
  min-height: 288px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;


// components/styled/TableContainer.tsx
export const TableContainer = styled.div`
  border: 1px solid #ececec;
  margin: 20px 0 20px;
 

  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme }) => themes[theme].searchQuoteCardBg};
  box-shadow: 0px 6px 18px -2px #18181C1A;

  .ant-table-wrapper {
    padding: 6px 8px 8px 14px;
  }

  .ant-table {
    overflow: auto;
  }

  .ant-table-thead > tr > th {
    background-color: #F3F5F6 !important;
    font-family: "Plus-Jakarta-Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    color: #0770BF !important;
  }

  .ant-table-tbody > tr > td {
    font-family: "Plus-Jakarta-Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => themes[theme].tableTd} !important;
    background: ${({ theme }) => `${themes[theme].searchQuoteCardBg} !important`};
  }

  .ant-pagination-next {
    span {
      background-color: #e4f0ff;
      display: inline;
      padding: 10px 20px;
      border-radius: 8px;
      border-top: 1px solid #1169a0;
    }
    span::after {
      color: #1169a0;
      content: "Next";
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;
      padding-right: 10px;
    }
    button {
      position: relative;
    }
    button:before {
      content: "";
      background-image: url('data:image/svg+xml,<svg ... />');
      width: 30px;
      height: 15px;
      display: block;
      position: absolute;
      background-repeat: no-repeat;
      background-size: contain;
      right: 0px;
      background-position: center;
      top: 8px;
    }
    svg {
      display: none;
    }
  }

  .ant-pagination-prev {
    button {
      position: relative;
    }
    button:before {
      content: "";
      background-image: url('data:image/svg+xml,<svg ... />');
      width: 30px;
      height: 15px;
      display: block;
      position: absolute;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      transform: rotate(180deg);
      top: 8px;
    }

    span {
      background-color: #e4f0ff;
      display: inline;
      padding: 10px 20px;
      border-top: 1px solid #1169a0;
      border-radius: 8px;
    }

    span:after {
      color: #1169a0;
      content: "Prev";
      font-size: 14px;
      padding-left: 10px;
      font-weight: 700;
      line-height: 18px;
    }

    svg {
      display: none;
    }
  }
`;

export const Tabletitle = styled.h4`
  background: linear-gradient(161.5deg, #065281  -15.49%, #36affb 98.81%);
  font-family: "Inter", sans-serif;
  font-size: 24px;
  margin: 0px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.2px;
  text-align: left;
  color: #fff;
  padding: 16px 52px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const OverlayContent = styled.div`
  position: relative;
  background-color: white;
  padding: 40px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const StyledTableWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  font-family: "Inter", sans-serif;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 14px;
    background: #f9f9f9;
    color: ${({ theme }) => themes[theme].primaryText || "#000"};
  }

  .separator-row {
    background-color: #a2a28a;
    height: 24px;

    td {
      border: none;
      padding: 0;
      background-color: #a2a28a;
    }
  }
`;