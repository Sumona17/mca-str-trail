import styled from "styled-components";
import themes from "constants/theme.json";

export const StepperContainer = styled.div`
  .stepper-container {
    margin: 50px;
}
    
.Quotelabel {
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => themes[theme].createQuoteLabel};
}

.stepper {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
    gap:10px;
}

.step {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.step.active {
    color:${({ theme }) => themes[theme].activeStep} ;
}

.step-content {
    display: flex;
    align-items: center;
    padding-top:10px;
}

.step-label {
    color:${({ theme }) => themes[theme].stepLabel}; 
    font-size: 12px;
    padding-left: 5px;


}


.step.active .step-label {
    color:${({ theme }) => themes[theme].activeStep};  ;
    font-weight: 700;
}

.circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #ccc;
    background-color: white;
    position:relative;
}

.circle.filled {
    /* Blue color for active step circle */
    border-color: #36AFFA;
}
.step-bar {
    width: 100%;
    height: 6px;
    border-radius: 9px;
    background-color: #ccc;
}

.step.active .step-bar {
    background-color: #36AFFA;

}

.stepper-controls {
    display: flex;
    justify-content: space-between;
}

.stepperbutton {
    width: 140px;
    height: 41px;
    background-color: #276070;
    border-radius: 10px;
    color: #1169A0;
    font-weight: bold;
    border-top: 1px solid #1169A0
}

.stepperbutton-bind {
    width: 140px;
    height: 41px;
    background-color: #E4F0FF;
    border-radius: 10px;
    color: #1169A0;
    font-weight: bold;
    margin-right:20px;
}

.next-image{
    margin-left:5px;
}

.arrow-back{
    transform:rotate(180deg);
    margin-right:5px;
}

.form-element-btn-next {
    // position: absolute;
    padding-top:-10px;
    //padding-right:50px;
    right:0;
}

.container-box {
    border: none;
    padding: 20px;
    border-radius: 10px;
    //box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 6px 18px -2px #18181C1A;
    background-color: ${({ theme }) => themes[theme].formStepperBg};
}
.container-box-productoffer {
    margin-top:30px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 6px 18px -2px #18181C1A;
    background-color: ${({ theme }) => themes[theme].formStepperBg};
}
    .container-box-stepper {
    margin-top:20px;
    //padding: 30px;
}
.container-box-half {
    border:  ${({ theme }) =>
      theme === "dark" ? "0.5px solid #373636" : "0.5px solid #f1f1f1"};
    padding: 20px;
    width: 110%;
    border-radius: 10px;
   box-shadow: 0px 6px 18px -2px #18181C1A;
   background-color:${({ theme }) => themes[theme].formStepperBg};
}
.container-box-rightmain{
    width: 100%;
}
.container-box-right-map {
    padding: 0px;
    width: 100%;
    border-radius: 10px;
    background:#36AFFA;
    box-shadow: 0px 6px 18px -2px #18181C1A;
}
    .container-box-right {
    border: 0.5px solid #f1f1f1;
    padding: 20px;
    width: 100%;
    margin-top:20px;
    border-radius: 10px;
    background-color:${({ theme }) => themes[theme].formStepperBg};
    //box-shadow: 0px 6px 18px -2px #18181C1A;
}
.container-wrapper{
    display: flex;
    gap:50px;
    justify-content: space-between;
}

//property information
.logobox {
    width: 34px;
    height: 34px;
    padding: 8px 10px 8px 9px;
    gap: 10px;
    border-radius: 5px;
    background-color: #EEF6FF;


}

.stepperbutton-edit {
    width: 67px;
    height: 40px;
    gap: 8px;
    border-radius: 5px;
    border: 1px solid #F1F1F1
    color:${({ theme }) => themes[theme].stepperEditBtn};
}

.step-content-box {
    display: flex;
    gap:30px;
    justify-content: space-between;
    color: ${({ theme }) => themes[theme].stepperContentBoxColor};
}
    .step-content-box-map {
    display: flex;
    gap:10px;
    justify-content: space-between;
    padding-top:10px;
}

.Heading-label {
    color: ${({ theme }) => themes[theme].stepperContentBoxColor};
    font-size: 16px;
    font-weight: 600;
    text-align: left;

}
.subheading-label {
font-size:13px;
font-weight:400;
color:${({ theme }) => themes[theme].stepperContentBoxColor} ;

}

.form-heading {
    color: #ADACB0;
    font-weight: 400;
    margin-bottom: 5px;
    font-size:13px;

}
    .form-heading1 {
    color: #ADACB0;
    font-weight: 400;
    margin-bottom: 5px;
    font-size:13px;
    padding:0px;

}

.form-controls {
    width: 100%;
    //box-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
}
    .form-controls1 {
    width: 100%;
    box-shadow: 0px 1.5px 4px -1px #9c9c9f;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
}
    .form-controls1:focus, 
    .form-controls1:active {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
}
.dropdown-controls{
    width: 100%;
    box-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.2);
    height:46px;
    border-radius: 5px;
    margin-bottom: 5px;
}

.form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;
    padding-top:25px;
}
.mapbox {
    width: 100%;
    height: 100%;
    padding:none !important;
    border-radius: 0px 0px 10px 10px;


}
.ant-card-body .ant-card{
padding:0;
border-radius:0;
}
.product-offer-label {
    color: #FFFFFF;
    width: 626px;
    height: 30px;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    //background-color: #36AFFA;


}
.maplogobox {
    width: 45px;
    height: 45px;
    border-radius: 5px;


}
.map-logo {
    width: 34px;
    height: 34px;
    padding: 8px 10px 8px 9px;
    gap: 10px;
    border-radius: 5px;


}
// .label-text {
//   color: #ADACB0;
//   display: block;
//   margin-bottom: 10px;
// }

.required-star {
  color: red; 
  padding-right: 5px;
}

     hr {
     border: 0.5px solid #e0e0e0;
     margin: 24px 0;
}    
`;
export const Container = styled.div`
  max-width: 1220px;
  //padding: 10px 20px;
  margin: 0 auto;
`;

export const SidebarContainer = styled.div`
  //   max-height: calc(100vh - 100px);
  min-height: 100vh;
  overflow-y: auto;

  // scrollbar-width: thin;
  // scrollbar-color: rgba(255, 255, 255, 0.4) transparent;

  // &::-webkit-scrollbar {
  //   width: 6px;
  // }

  // &::-webkit-scrollbar-thumb {
  //   background-color: rgba(255, 255, 255, 0.4);
  //   border-radius: 4px;
  // }

  // &::-webkit-scrollbar-track {
  //   background: transparent;
  // }
`;

export const StepItem = styled.div`
  padding: ${(props) => (props.isChild ? "10px 16px 10px 32px" : "14px 16px")};
  margin: 4px 0;
  cursor: pointer;
  border-radius: 6px;
  background-color: ${(props) =>
    props.isActive ? "rgba(255, 255, 255, 0.2)" : "transparent"};
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const StepHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const StepTitle = styled.span`
  color: #fff;
  font-size: ${(props) => (props.isChild ? "13px" : "14px")};
  font-weight: ${(props) => (props.isChild ? "normal" : "500")};
`;

export const StepDescription = styled.div`
  color: #bdc3c7;
  font-size: 10px;
  margin-left: 34px;
  opacity: 0.8;
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
    font-size: 13px !important;
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
