import styled from "styled-components";
import { Modal } from "antd";

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: ${({ theme }) =>
      theme == "dark" ? "#373636" : ""} !important;
    color: ${({ theme }) => (theme == "dark" ? "#FFFFFF" : "")} !important;
    .ant-modal-close-x {
      color: ${({ theme }) => (theme == "dark" ? "#FFFFFF" : "")} !important;
    }
  }
`;

export const ModalCard = styled.div`
  box-sizing: border-box;

  position: relative;
  max-width: 1220px;
  //height: 450px;
  background: ${({ theme }) => (theme === "dark" ? "#373636" : "#FFFFFF")};
  padding: 0px 20px;
  margin: 0 auto;
  border: ${({ theme }) =>
    theme === "dark" ? "1px solid #373636" : "1px solid #F1F1F1"};
  box-shadow: 0px 0px 10px 0.5px rgba(24, 24, 28, 0.02),
    0px 6px 18px -2px rgba(24, 24, 28, 0.1);
  border-radius: 10px;

  .card-title {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin: 0px;
    padding-top: 15px;
    padding-bottom: 20px;
    letter-spacing: -0.03em;
    color: ${({ theme }) => (theme === "dark" ? "#FFFFFF" : "#121212")};
  }
  .fieldheaders {
    color: #adacb0;
  }
  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
  }
  .grid2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .radio {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2px;
    margin-left: 20px;
    font-weight: 500 !important;
    color: black !important;
  }
`;
export const Container = styled.div`
.stepperbutton {
    width: 140px;
    height: 41px;
    // background-color: #E4F0FF;
    background: #36AFFA;

    border-radius: 10px;
    color: white;
    font-weight: bold;
    border-top: 1px solid #1169A0
    margin:500px;
}
`;
export const PaymentContainer = styled.div`
  max-width: 1220px;
  padding: 20px 50px;
  margin: 0 auto;

  .subtitle {
    font-size: 18px;
    font-family: Plus-Jakarta-Sans;
    font-weight: 700;
    line-height: 22.68px;
    letter: 30%;
  }
  .ant-form-item-label > label {
    color: #adacb0;
  }
  .ant-radio-wrapper > span {
    color: #222222;
  }
`;
export const CustomModalContent = styled.div`
  text-align: center;
  .sigin-title {
    font-size: 20px;
    font-weight: 600;
    margin: 50px;
  }
  .sigintext {
    margin: 0px;
    font-size: 16px;
  }
  .logo-button {
    border: 0px;
    background: none;
    margin-bottom: 5px;
  }
  .modal-heading {
    margin: 10px;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 600;
  }

  .printButton {
    width: 90px;
    height: 41px;
    background: #36affa;
    border-radius: 10px;
    color: white;
    font-weight: 700;
    font-size: 14px;
  }
`;
