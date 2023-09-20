import * as S from './Main.style.jsx';
import React, { useState } from 'react';
import { stackData } from './stackData.js';
import ListSearchFilterContainer from '../list/ListSearchFilterContainer.jsx';

const MainSearchContainer = () => {
  const [bestStackData, setBestStackData] = useState(stackData);

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
          {bestStackData.map((item) => (
            <S.BestTechStackItem key={item.id}>
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <span>{item.name}</span>
            </S.BestTechStackItem>
          ))}
        </S.BestTechStackList>
      </S.BestTechStackBox>
    </S.MainSearchContainer>
  );
};

export default MainSearchContainer;
