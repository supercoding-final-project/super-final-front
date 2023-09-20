import * as S from './Main.style.jsx';
import React, { useEffect, useState } from 'react';
import ListSearchFilterContainer from '../list/ListSearchFilterContainer.jsx';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MainSearchContainer = () => {
  const [skillStacksData, setSkillStacksData] = useState([]); // API에서 가져온 데이터를 저장할 상태
  const [activeTab, setActiveTab] = useState('mento'); // 초기값으로 'mento' 탭을 활성화
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    if (activeTab === 'mento') {
      navigate('/list/mento'); // 멘토 탭이 active일 때 '/list/mento'로 이동
    } else if (activeTab === 'post') {
      navigate('/list/post'); // POST 탭이 active일 때 '/list/post'로 이동
    }
    // 여기서 검색 결과를 필터링하고 표시하도록 로직을 추가하세요.
    // 검색 결과를 state에 저장하고, 이를 렌더링하는 방식으로 구현할 수 있습니다.
  };

  return (
    <S.MainSearchContainer>
      <S.MainSearchList>
        <S.MainSearchItem
          // className="active"
          className={activeTab === 'mento' ? 'active' : ''}
          // style={{ color: activeTab === 'mento' ? 'red' : 'black' }}
          onClick={() => handleTabClick('mento')}
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
        <ListSearchFilterContainer
          searchInput={searchInput}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
      </S.MainSearchBox>
      <S.BestTechStackBox>
        <h3>BEST10 기술 스택</h3>
        <S.BestTechStackList>
          {skillStacksData.map((item) => (
            <Link to="/list/post">
              <S.BestTechStackItem key={item.skillStackName}>
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
