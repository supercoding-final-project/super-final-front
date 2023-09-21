import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'src/globalLayout/GlobalStyle';
import { Icon } from 'src/components/common/icon/Icon';

const MainSearchLink = ({ activeTab, handleSearch }) => {
  return (
    <MainSearchBtn>
      <section onClick={handleSearch}>
        <Icon name="Search" />
        <div>
          <p
          // key={index}
          // data={data}
          // type="text"
          // // placeholder="키워드 입력"
          // value={keyword}
          // onChange={handleInputChange}
          // placeholder={`${activeTab} 검색하기`}
          />
        </div>
        <button>검색</button>
      </section>
    </MainSearchBtn>
  );
};

export default MainSearchLink;

export const MainSearchBtn = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  margin: 12px auto 20px;
  section {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    svg {
      position: absolute;
      left: 40px;
      width: 30px;
      height: 45px;
      flex-shrink: 0;
      background-color: ${theme.color.point};
    }
    div {
      display: flex;
      width: 100%;
      p {
        padding: 12px 40px 12px 80px;
        box-sizing: border-box;
        width: 100%;
        height: 69px;
        background-color: ${theme.color.point};
        border-radius: 999px;
        border: none;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.5px;
        color: ${theme.color.bgc1};
        &:-moz-selection {
          background-color: ${theme.color.bgc1};
          color: ${theme.color.point};
        }
        &::selection {
          background-color: ${theme.color.bgc1};
          color: ${theme.color.point};
        }
        &:focus {
          outline-color: ${theme.color.sub3};
        }
        &::placeholder {
          color: ${theme.color.sub3};
        }
      }
    }
    button {
      position: absolute;
      right: 40px;
      border: none;
      cursor: pointer;
      background-color: ${theme.color.point};
      text-align: center;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: ${theme.color.sub3};
      transition: all ease-in-out 0.15s;
      &:hover {
        color: ${theme.color.bgc1};
      }
    }
  }
`;
