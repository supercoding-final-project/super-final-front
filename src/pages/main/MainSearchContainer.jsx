import * as S from './Main.style.jsx';
import React, { useEffect, useState } from 'react';
import { stackData } from './stackData.js';
import ListSearchFilterContainer from '../list/ListSearchFilterContainer.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainSearchContainer = () => {
  // 테스트
  // const [bestStackData, setBestStackData] = useState(stackData);
  const [data, setData] = useState([]); // API에서 가져온 데이터를 저장할 상태

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 API GET 요청 보내기
    axios
      .get('https://codevelop.store/api/v1/skillStacks/top10')
      .then((response) => {
        // API 응답에서 "data" 배열 가져오기
        const { data } = response.data;
        setData(data);
      })
      .catch((error) => {
        console.error('API 요청 에러:', error);
      });
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  return (
    <S.MainSearchContainer>
      <S.MainSearchList>
        <S.MainSearchItem className="active">멘토</S.MainSearchItem>
        <S.MainSearchItem>POST</S.MainSearchItem>
      </S.MainSearchList>
      <S.MainSearchBox>
        <ListSearchFilterContainer />
      </S.MainSearchBox>
      <S.BestTechStackBox>
        <h3>BEST10 기술 스택</h3>
        <S.BestTechStackList>
          {data.map((item) => (
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
