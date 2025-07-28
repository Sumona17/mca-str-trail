import styled from "styled-components";
// import HomeBannerimage from "assets/images/bannerimage.png";
// import HomeBannerimage from "assets/images/bgimage.png";
// import HomeBannerimagedark from "assets/images/bgimage-dark.png";
import themes from "constants/theme.json";

const getDashboardBanner = (theme) => `
 background-image: ${`url(${require(`../../../assets/images/${themes[theme].dashboardBannerImg}`)})`};
`;

export const DashboardCard = styled.div`
  .ant-card-body {
    //background: ${({ theme }) => themes[theme].dashboardCardBg};
    border-radius: 8px 8px;
  }
  .ant-card-bordered {
    border: 1px solid #f0f0f0;
    border: none;
  }
  .card-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-desc {
    margin: 0; /* optional: remove default p tag margin */
    font-weight: 500;
    color: #333;
  }

  .card-value {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border: 1px solid #02A373;
  background-color: #E6FAF2;
  border-radius: 6px;
  color: #02A373;
  font-weight: 600;
  font-size: 14px;

  }

  .cardvalue-data {
    display: flex;
    gap: 8px;
    font-size: 10px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.06em;
    color: #121315;
    align-items: center;
  }
  .card-value {
    background-color: ${({ theme }) => themes[theme].dashboardCardValueBg};
    color: #1169a0;
    font-family: Inter;
    font-size: 12px;
    font-weight: 475;
    line-height: 18px;
    padding: 0px 6px;
    gap: 2px;
    border-radius: 5px;
  }
  .card-title {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin: 0px;
    letter-spacing: -0.03em;
    color: ${({ theme }) => themes[theme].dashboardCardTitle};
  }
  .card-desc {
    padding-top: 16px;
    color: ${({ theme }) => themes[theme].dashboardCardDesc};
  }
  .card-content {
    margin: 24px 0 0px;
    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    }
    .redirect-link {
      text-align: right;
      cursor: pointer;
    }
  }
  .risk-container {
    margin: 20px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #f9f9f9;
  }
`;
export const BannerImage = styled.div`
  ${(props) => getDashboardBanner(props.theme || "light")}
  // min-height: 288px;
  padding: 40px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .subtitle {
    margin: 0px;
    font-wight: 600;
    font-size: 18px;
    line-height: 22.68px;
    color: #fff;
  }
    .approvertitle {
    margin: 0px;
    font-wight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
  }
  .name {
    color: #fff;
    margin: 0px;
    font-wight: 600;
    font-size: 36px;
    line-height: 46.68px;
  }
    .title {
    color: #fff;
    margin: 0px;
    font-wight: 400;
    font-size: 24px;
    line-height: 46.68px;
  }
  .content {
    margin: 0px;
    font-wight: 400;
    font-size: 14px;
    color: #fff;
  }
`;
export const PublishImage = styled.div`
  ${(props) => getDashboardBanner(props.theme || "light")}
  // min-height: 288px;
  padding: 40px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px 10px 0 0;
  .subtitle {
    margin: 0px;
    font-wight: 600;
    font-size: 18px;
    line-height: 22.68px;
    color: #fff;
  }
    .approvertitle {
    margin: 0px;
    font-wight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
  }
  .name {
    color: #fff;
    margin: 0px;
    font-wight: 600;
    font-size: 36px;
    line-height: 46.68px;
  }
    .title {
    color: #fff;
    margin: 0px;
    font-wight: 400;
    font-size: 24px;
    line-height: 46.68px;
  }
  .content {
    margin: 0px;
    font-wight: 400;
    font-size: 14px;
    color: #fff;
  }
`;
export const DashboardSection = styled.div`
  .area-chart-card {
    .ant-card-body {
      padding: 24px 10px;
    }
  }
  .graph-card {
    background-color: #ffffff;
    //box-shadow: ${({ theme }) => themes[theme].dashboardGraphBoxShadow};
    // box-shadow: 2px 5px 6px 6px #bebebe33;
    border: 0.5px solid #aaa7a7;
    &.mt {
      margin-top: 20px;
    }
  }
  .quick-link {
    border: none;
    .quick-title {
      padding: 20px 20px 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      font-weight: 700;
      line-height: 18.94px;
      margin: 0px;
      // border-bottom:0.5px solid #9C9C9F;
      border-bottom: 0.5px solid #9c9c9f59;
      color: ${({ theme }) => themes[theme].dashboardQuickLink};
    }
    .ant-card-body {
      padding: 10px 0px;
      border-radius: 8px;
      border: none;
      box-shadow: ${({ theme }) => themes[theme].dashboardGraphBoxShadow};
      background: ${({ theme }) => themes[theme].dashboardGraphBg};
    }
    .linkbox {
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      gap: 16px;

      a {
        border: ${({ theme }) => themes[theme].dashboardQuickLinksItemsBorder};
        border-radius: 50px;
        background: ${({ theme }) => themes[theme].dashboardQuickLinkItemsBg};
        color: ${({ theme }) => themes[theme].dashboardGraphTitle};
        font-weight: 400;
        padding: 11px;
        font-size: 15px;
      }
    }
  }
`;
export const GraphTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin: 0px;
  line-height: 32px;
  color: ${({ theme }) => themes[theme].dashboardGraphTitle};
`;
export const ProgressBarTable = styled.div`
  table {
    width: 100%;
    margin-top: 15px;
    tr {
      margin: 0px;
    }
    td {
      border-bottom: 1px solid #edf2f6;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: ${({ theme }) => themes[theme].dashboardProgressTableBody};
      padding: 8px 5px;

      text-align: left;
      .progressvalue {
        color: #0095ff;
        border-radius: 8px;
        padding: 1px 6px;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        min-width: 40px;
        text-align: center;
        display: inline-block;

        &.nfip-progressvalue {
          border: 1px solid #0095ff;
          color: #0095ff;
          background-color: #f0f9ff;
        }

        &.focusmca-progressvalue {
          border: 1px solid #9dc8be;
          color: #9dc8be;
          background-color: #f0fdf4;
        }

        &.excess-progressvalue {
          border: 1px solid #884dff;
          color: #884dff;
          background-color: #fbf1ff;
        }

        &.brokerage-progressvalue {
          border: 1px solid #ff0000;
          color: #ff0000;
          background-color: #ffeaeb;
        }
      }
    }
    th {
      font-size: 13px;
      padding: 3px 5px;
      text-align: left;
      border-bottom: 1px solid #edf2f6;
      font-weight: 400;
      line-height: 16px;
      color: ${({ theme }) => themes[theme].dashboardProgressTableHeading};
    }
  }
`;
