import styled from "styled-components";
import themes from "constants/theme.json";

export const StyledTabsContainer = styled.div`
  padding: 0;
  margin: 0;

  .custom-tabs {
    display: flex;
    justify-content: center;
    background: #fff;
    padding: 8px;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 2%;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

    overflow-x: auto;
    white-space: nowrap;
    max-width: 100%;

    /* Hide scrollbar for Chrome, Safari, and Edge */
    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  .ant-tabs-nav {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    max-width: 100%;
  }

  .ant-tabs-tab {
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    flex-shrink: 0;
  }

  .ant-tabs-tab-active {
    border-bottom: 3px solid #36affa;
    color: #1169a0 !important;
    font-weight: 700;
  }

  .custom-tab-label {
  color: #333; 
}

.custom-tab-label.active-tab {
  color: #1169a0;
  font-weight: 700;
}


  .custom-button {
  margin: 0 40px;
    background-color: #1169a0;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    border: 1px solid #1169a0;
    width: 20%;
    height: 200%;
  }

 
  }
`;

export const StepperContainer = styled.div`
  .container-box-stepper {
    margin-top: 20px;
    //padding: 30px;
  }
  .stepper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    // justify-content: space-between;
    margin: 40px 0;
    gap: 10px;
  }

  .step {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .step.active {
    color: ${({ theme }) => themes[theme].activeStep};
  }

  .step-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 10px;
    text-align: center;
    max-width: 100%;
  }

  .step-label {
    color: ${({ theme }) => themes[theme].stepLabel};
    font-size: 12px;
    padding-left: 5px;
  }

  .step.active .step-label {
    color: ${({ theme }) => themes[theme].activeStep};
    font-weight: 700;
  }

  .circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #ccc;
    background-color: white;
    position: relative;
  }

  .circle.filled {
    /* Blue color for active step circle */
    border-color: #36affa;
  }
  .step-bar {
    width: 100%;
    height: 6px;
    border-radius: 9px;
    background-color: #ccc;
  }

  .step.active .step-bar {
    background-color: #36affa;
  }

  .stepper-controls {
    display: flex;
    justify-content: space-between;
  }

  .stepperbutton {
    width: auto;
    // max-width: 140px;
    padding: 10px 15px;
    height: 41px;
    background-color: #276070;
    border-radius: 10px;
    color: #FFFFFF;
    font-weight: bold;
    border-top: 1px solid #1169a0;
    white-space: normal !important; /* Allows text wrapping */
    word-wrap: break-word; /* Ensures long words wrap properly */
    text-align: center;
    height: auto; /* Adjusts height based on content */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }
  .submit-button {
    padding: 10px 15px;
    height: 41px;
    border: none;

    border-radius: 10px;

    background: rgb(255, 228, 233);

    color: rgb(250, 54, 116);
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    white-space: normal !important; /* Allows text wrapping */
    word-wrap: break-word; /* Ensures long words wrap properly */
    text-align: center;
    height: auto; /* Adjusts height based on content */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }

  .form-element-btn-next {
    // position: absolute;
    padding-top: -10px;
    //padding-right:50px;
    right: 0;
  }
  .stepperbutton-edit {
    width: 67px;
    height: 40px;
    gap: 8px;
    border-radius: 5px;
    border: 1px solid #f1f1f1;
    color: ${({ theme }) => themes[theme].stepperEditBtn};
  }

  .step-content-box {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    color: ${({ theme }) => themes[theme].stepperContentBoxColor};
  }
  .step-content-box-map {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding-top: 10px;
  }
  .stepper-container {
    background: ${({ theme }) => theme.formStepperBg};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 6px 18px -2px rgba(24, 24, 28, 0.1);
    overflow-x: hidden;
    max-width: 100%;
  }
  
    .productstepper-container {
    background: ${({ theme }) => theme.formStepperBg};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 6px 18px -2px rgba(24, 24, 28, 0.1);
    display: flex;
    gap: 24px;
    max-width: 100%;
    }
    
  /* === RESPONSIVE BEHAVIOR === */

  /* Tablet Screens: Reduce width and allow wrapping */
  @media (max-width: 1024px) {
    .step {
      flex: 1 1 40%; /* Allow steps to wrap into two rows */
    }
  }

  /* Mobile Screens: Stack steps vertically */
  @media (max-width: 768px) {
    .stepper {
      flex-direction: column;
      gap: 20px;
    }

    .step {
      flex: none;
      width: 100%;
    }

    .step-content {
      flex-direction: column;
    }

    .step-label {
      font-size: 12px;
    }
  }

  /* Extra Small Screens: Further adjust spacing */
  @media (max-width: 480px) {
    .step {
      width: 100%;
    }

    .step-label {
      font-size: 11px;
    }
  }

  .stepperbutton {
    width: 140px;
    height: 41px;
    background-color: #276070;
    border-radius: 10px;
    // color: #1169A0;
    font-weight: bold;
    border-top: 1px solid #1169A0
}
//overlapping stepper

.overlap-stepper-container {
  display: flex;
  position: relative;
  padding: 2rem;
  align-items: flex-start;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  margin-left: -40px; 
  border: 1px solid #1976d2;
  color:rgb(31, 135, 238);
  font-size: 50px;
  border-radius: 999px;
  background-color: white;
  position: relative;
  width: 250px;
  height: 50px; 
 
}

.step:first-child {
  margin-left: -15;
}



.step.active {
  background-color: #e3f2fd;
}

.circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #ccc;
  color: white;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -50px;
}

.circle.active {
  background-color: #1976d2;
}

.label {
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color:rgb(31, 135, 238);
  font-weight: 500;
  font-size: 15px;
  white-space: nowrap;
  
  
}


  }
`;

export const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GreyButton = styled.button`
  background-color: #bdbdbd;
  color: white;
  font-weight: normal;
  padding: 8px 3px;
  border-radius: 30px;
  margin-top: 0.5%;
  cursor: pointer;
  width: 234px;
  border: none;
`;
export const WhiteButton = styled.button`
  background-color: white;
  border: 1px solid black;
  margin-top: 0.5%;
  cursor: pointer;
`;

export const ValueCard = styled.div`
  display: inline-block;
  padding: 2px 8px;

  border: 1px solid #002c44;
  border-radius: 2px;
  box-shadow: inset 0 0 1px #002c44;
  font-size: 12px;
  font-weight: 600;
  color: #1f1f1f;
  line-height: 1;
  height: 20px;
  width: 100px;
  text-align: center;
  vertical-align: middle;

  .value-box:hover {
    transform: scale(1.05);
  }

  .value-text {
    font-weight: 600;
    color: #1f1f1f;
  }
`;

export const MarginLessH4 = styled.h4`
  margin: 0px;
`;
export const MarginLessP = styled.p`
  margin: 0px;
`;

export const ApplicationButton = styled.button`
  width: auto;
  // max-width: 140px;
  padding: 10px 15px;
  height: 41px;
  background-color: #276070;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  border-top: 1px solid #1169a0;
  white-space: normal !important; /* Allows text wrapping */
  word-wrap: break-word; /* Ensures long words wrap properly */
  text-align: center;
  height: auto; /* Adjusts height based on content */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;
`;

export const TabContainer = styled.div`
  background: ${({ theme }) => theme.formStepperBg};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 6px 18px -2px rgba(24, 24, 28, 0.1);
  // overflow-x: hidden;
  max-width: 100%;

  .stepperbutton {
    width: auto;
    // max-width: 140px;
    padding: 10px 15px;
    height: 100px;
    background-color: #276070;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    border-top: 1px solid #1169a0;
    white-space: normal !important; /* Allows text wrapping */
    word-wrap: break-word; /* Ensures long words wrap properly */
    text-align: center;
    height: auto; /* Adjusts height based on content */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }
`;

export const StyledTable = styled.div`
  .ant-table {
    width: 100%;
    border: none;
  }

  th.column-lightblue {
    background-color: #f3f5f6 !important;
    color: #0770bf !important;
    text-align: center !important;
    border-right: none !important;
    border-left: none !important;
  }

  .ant-table-thead > tr > th {
    border-right: none !important;
    border-left: none !important;
  }

  .ant-table-tbody > tr > td {
    // background-color: #ECECEC !important;
    text-align: center !important;
    color: #505050 !important;
    font-weight: 500;
    font-size: 13px;
    border-right: none !important;
    border-left: none !important;
  }

  .ant-table-tbody > tr > td:first-child {
    background-color: #e2eff8 !important;
    text-align: center !important;
    font-weight: 700;
    font-size: 14px;
  }

  .ant-table-tbody > tr:first-child > td {
    border-top: 4px solid white;
  }
  .ant-table-tbody > tr:hover > td:first-child {
    background-color: #e2eff8 !important;
  }

  .ant-table-tbody > tr:hover > td {
    background-color: inherit !important;
  }

  .ant-table-row:hover {
    background-color: inherit !important;
  }
`;

export const StyledLoanAdminRow = styled.tr`
  td {
    border-bottom: 4px solid white !important;
    background-clip: padding-box;
  }

  &:last-child td {
    border-bottom: none !important;
  }

  /* Row 1 (Loan Administration parent row) */
  &[data-row-key="1"] {
    td:nth-child(-n + 3) {
      background-color: #f5f4f4;
    }
  }

  /* Row 2 (Loan Modelling) */
  &[data-row-key="2"] {
    td:nth-child(-n + 3) {
      background-color: #f5f4f4;
    }
  }

  /* Row 3 (Loan Approval parent row) */
  &[data-row-key="3"] {
    background-color: #f5f4f4;
  }

  /* Child rows under Loan Administration */
  &[data-row-key="1-1"],
  &[data-row-key="1-2"],
  &[data-row-key="1-3"],
  &[data-row-key="1-4"],
  &[data-row-key="3-1"],
  &[data-row-key="3-2"],
  &[data-row-key="3-3"] {
    td:nth-child(-n + 3) {
      background-color: #f5f4f4;
    }

    td {
      text-align: left !important;
      font-size: 13px;
      color: #333;
      padding: 8px 12px;
    }

    td:first-child {
      padding-left: 24px !important;
      position: relative;
    }

    /* Optional: vertical spacing between child rows */
    border-bottom: 1px solid #e0e0e0;
  }

  .pill {
    display: inline-block;
    border: 1px solid #003b6d;
    border-radius: 12px;
    padding: 2px 12px;
    font-weight: 600;
    color: #003b6d;
    width: 60px;
    text-align: right;
    background: #ffffff;
  }

  .pill-input {
    width: 60px;
    padding: 2px 8px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #ccc;
    background-color: #fff;
  }

  .pill-error {
    border-color: red;
    background-color: #f7c3c9;
  }

  .ant-table-tbody > tr:hover > td {
    background: none !important;
  }

  .ant-table-row:hover {
    background: none !important;
  }

  .ant-table-cell {
    transition: none !important;
  }
`;
export const IngestDocumentsDiv = styled.div`
  background-color: #f3f5f6;
  // border-radius: 30px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // text-align: center;

  height: 321px;
  width: 533px;

  border-radius: 8px;
  padding: 24px;
  max-width: 540px;
  margin-top: 16px;
  .dragActive {
    background-color: #f0f8ff;
  }
`;

export const MarginLeftContent = styled.div`
  margin-left: 4%;

  .ant-list-item {
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
  }
`;

export const DocumentListItemIconImg = styled.img`
  width: 12.2px;
  height: 11.38px;
`;

export const MissingDataContainerDiv = styled.div`
  background-color: #f3f5f6;
  // border-radius: 30px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // text-align: center;

  // height: 321px;
  width: 100%;

  border-radius: 8px;
  padding: 24px;

  margin-top: 16px;

  .pill {
    display: inline-block;
    border: 1px solid #003b6d;
    border-radius: 12px;
    padding: 2px 12px;
    font-weight: 600;
    color: #003b6d;
    width: 119px;
    text-align: right;
    background: #ffffff;
    text-align: center;
    justify-content: center;
  }
`;

export const FormSection = styled.div`
  .customlabel {
    padding: 12px 6px;
    display: inline-block;
  }
  .customlable {
    display: inline-block;
    padding: 12px 0px;
    font-size: 13px !important;
    font-weight: 500;
    line-height: 19.5px;
    color: #adacb0 !important;
    font-family: "Inter", sans-serif;
  }
  .ant-card {
    border-color: ${({ theme }) => themes[theme].searchQuoteFormBorder};
    //box-shadow: 0px 5px 13px -5px #0a090b0d;
    box-shadow: 0px 6px 18px -2px #18181c1a;
    background: ${({ theme }) => themes[theme].searchQuoteCardBg};
  }
  .ant-col {
    min-height: auto;
  }

  input {
    // box-shadow: 0px 1.5px 4px -1px #9c9c9f;
    font-family: "Inter", sans-serif;
    // height: 48px;
    border: none;
  }
  .select {
    box-shadow: 0px 1.5px 4px -1px #9c9c9f;
    font-family: "Inter", sans-serif;
    height: 48px;
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
    background-color: ${({ theme }) => themes[theme].searchQuoteBtn};
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
  .ant-upload-wrapper .ant-upload {
    width: 100%;
  }

  .label-text {
    font-size: 13px;
    font-weight: 500;
    color: #000000 !important;
    font-family: "Inter", sans-serif;
  }

  .label-text .required-star {
    color: red !important;
    margin-right: 4px;
  }

  .contentlabel {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => themes[theme].createQuoteLabel};
  }
  .enrollmentlabel {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => themes[theme].createQuoteLabel};
  }

  .offerlabel {
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    color: #000000;
  }
  .offer-sublabel {
    font-size: 13px;
    font-weight: 500;
    min-width: 180px;
    font-family: "Inter";
    color: #000000;
  }
  .offer-subdescription {
    font-size: 13px;
    font-weight: 400;
    color: #000000;
  }

  .headerlabel {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: #888888;
    font-family: "Inter", sans-serif;
  }

  .tab-container {
    background: ${({ theme }) => theme.formStepperBg};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 6px 18px -2px rgba(24, 24, 28, 0.1);
    overflow-x: hidden;
    max-width: 100%;
  }
`;
export const AnalyzingContainer = styled.div`
  .dot-animation::after {
    content: "";
    display: inline-block;
    width: 1em;
    text-align: left;
    animation: dots 1.5s steps(3, end) infinite;
  }

  @keyframes dots {
    0% {
      content: "";
    }
    33% {
      content: ".";
    }
    66% {
      content: "..";
    }
    100% {
      content: "...";
    }
  }
`;
