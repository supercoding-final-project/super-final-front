import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const FooterWrapper = styled.div`
  margin: 160px auto 0;
  width: 100%;
  footer {
    display: flex;
    width: 1440px;
    padding: 40px 80px;
    align-items: flex-start;
    gap: 160px;
    background: ${theme.color.bgc2};
    .logo {
      color: ${theme.color.grey1};
      font-size: 20px;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: -0.5px;
      cursor: pointer;
    }
  }
`;

export const Company = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  li {
    display: flex;
    align-items: center;
    color: ${theme.color.grey1};
    font-size: 16px;
    font-weight: 200;
    line-height: 140%;
    letter-spacing: -0.5px;
  }
  .bold {
    color: ${theme.color.grey3};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.5px;
    cursor: pointer;
  }
`;
