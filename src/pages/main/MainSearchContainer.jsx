import axios from 'axios';
import { useEffect, useState } from 'react';
// import ListSearchFilterContainer from '../list/ListSearchFilterContainer.jsx';
import { Link } from 'react-router-dom';

import * as S from './Main.style.js';
import MainSearchLink from './MainSearchLink.jsx';

const MainSearchContainer = ({
  activeTab,
  handleTabClick,
  handleSearch,
  handleInputChange,
  keyword,
}) => {
  // Top10 기술 스택 조회 API
  const [skillStacksData, setSkillStacksData] = useState([]); // API에서 가져온 데이터를 저장할 상태

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 API GET 요청 보내기
    axios
      .get('https://codevelop.store/api/v1/skillStacks/top10')
      .then((response) => {
        // API 응답에서 "data" 배열 가져오기
        const { data } = response.data;
        setSkillStacksData(data);
      })
      .catch((error) => {
        console.error('API 요청 에러:', error);
      });
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  return (
    <S.MainSearchContainer>
      <S.MainSearchList>
        <S.MainSearchItem
          // className="active"
          className={activeTab === 'mentor' ? 'active' : ''}
          // style={{ color: activeTab === 'mentor' ? 'red' : 'black' }}
          onClick={() => handleTabClick('mentor')}
        >
          멘토
        </S.MainSearchItem>
        <S.MainSearchItem
          className={activeTab === 'post' ? 'active' : ''}
          // style={{ color: activeTab === 'post' ? 'red' : 'black' }}
          onClick={() => handleTabClick('post')}
        >
          POST
        </S.MainSearchItem>
      </S.MainSearchList>
      <S.MainSearchBox>
        <MainSearchLink activeTab={activeTab} handleSearch={handleSearch} keyword={keyword} />
        {/* <ListSearchFilterContainer
          searchInput={searchInput}
          activeTab={activeTab}
          handleSearch={handleSearch}
          handleInputChange={handleInputChange}
          keyword={keyword}
        /> */}
      </S.MainSearchBox>
      <S.BestTechStackBox>
        <h3>BEST10 기술 스택</h3>
        <S.BestTechStackList>
          {skillStacksData.map((item) => (
            <Link to="/list/post" key={item.skillStackName}>
              <S.BestTechStackItem>
                <div>
                  <img src={item.skillStackImg} alt={item.skillStackName} />
                </div>
                <span>{item.skillStackName}</span>
              </S.BestTechStackItem>
            </Link>
          ))}
        </S.BestTechStackList>
      </S.BestTechStackBox>
    </S.MainSearchContainer>
  );
};

export default MainSearchContainer;
