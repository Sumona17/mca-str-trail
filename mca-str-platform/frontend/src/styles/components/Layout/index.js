import styled from "styled-components";
import themes from "constants/theme.json";

const getThemeStyle = (theme) => `
  background: ${`${
    themes[theme].bg
  } url(${require(`../../../assets/images/${themes[theme].bgImg}`)})`};
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;
export const Section = styled.div`
  width: 100%;
  display: flex;
`;

export const MainSection = styled.div`
  ${(props) => getThemeStyle(props.theme || "light")}
  background-size: 100%;
  background-repeat: no-repeat;
  .ant-layout {
    background: transparent;
  }
`;
export const Container = styled.div`
  max-width: 1220px;
  padding: 0px 20px;
  margin: 0 auto;
  ol.contentlist {
    li {
      font-weight: 600;
    }
  }
  .mt-negative {
    margin-top: -100px;
  }

  &.mt-positive {
    margin-top: 20px;
  }
  &.pb {
    padding-bottom: 20px;
  }
  .ta {
    text-align: right;
  }
  .gp {
    gap: 30px 0px;
  }
`;
export const CompactTableWrapper = styled.div`
  .ant-table-tbody > tr > td,
  .ant-table-thead > tr > th {
    padding: 5.7px 12px !important;
  }

  .ant-table-cell {
    font-size: 14px;
  }
`;
export const ContainerTable = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  border-radius:20px;
  ol.contentlist {
    li {
      font-weight: 600;
    }
  }
  .mt-negative {
    margin-top: -100px;
  }
    /* Apply vertical right border ONLY to the exception columns */
.exception-col {
  border-right: 2px solid #1677ff;
  padding-right:0
}

/* Optional: Remove border for the last exception column */
.ant-table-cell.exception-col:last-child {
  border-right: none;
}

  .extra-content-after {
   text-align: right;
   margin-bottom: 15px;
   margin-right: 15px;
}
.btn-export {
   background-color: #36AFFA;
}
   .search-box {
    display: flex;
    align-items: center;
    gap: 14px;
    &.search{
      justify-content:flex;
      padding:15px 0px;
    }
    .search-feild {
      position: relative;
      .search-icons {
        position: absolute;
        top: 12px;
        left: 7px;
      }
    }

  &.mt-positive {
    margin-top: 20px;
  }
  &.pb {
    padding-bottom: 20px;
  }
  .ta {
    text-align: right;
  }
  .gp {
    gap: 30px 0px;
  }
`;
