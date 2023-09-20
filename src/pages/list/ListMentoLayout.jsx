import { Icon } from 'src/components/common/icon/Icon';
import * as S from './List.style';
import MentoCardItem from '../main/MentoCardItem';
import { Link } from 'react-router-dom';
import SearchFilterContainer from './ListSearchFilterContainer';
import { useState } from 'react';
import { dutyType } from './dutyType';
import { theme } from 'src/globalLayout/GlobalStyle';

const MentoListLayout = () => {
  const [dutyTypeData, setDutyTypeData] = useState(dutyType);
  // const [activeTab, setActiveTab] = useState(tabData[0].id);

  const [selectedItems, setSelectedItems] = useState([]);
  // const handleTabClick = (filtered) => {
  //   setDutyTypeData(filtered);
  // };
  // const getActiveTabContent = () => {
  //   const activeTabData = tabData.find((tab) => tab.id === activeTab);
  //   return activeTabData ? activeTabData.content : [];
  // };
  const handleTechClick = (item) => {
    // 이미 선택된 아이템이라면 선택 해제
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      // 새로운 아이템 선택
      setSelectedItems([...selectedItems, item]);
    }
  };
  // const listItems = ['아이템 1', '아이템 2', '아이템 3', '아이템 4'];

  return (
    <S.ListWrapper>
      <S.ListSearchContainer>
        <S.ListSearchList>
          <S.ListSearchItem className="active">멘토</S.ListSearchItem>
          <S.ListSearchItem>
            <Link to="/list/post">POST</Link>
          </S.ListSearchItem>
        </S.ListSearchList>
        <S.ListSearchBox>
          <SearchFilterContainer />
        </S.ListSearchBox>
        <S.SearchFilterBox>
          <h3>
            <p>검색 필터</p>
            <p className="fold">
              <Icon name="Fold" size={20} /> <span>접기</span>
            </p>
          </h3>
          <S.CategoryFilterBox>
            <h3>
              <Icon name="Circle" size={20} />
              <span>직무</span>
            </h3>
            <ul>
              {dutyTypeData.map((item) => (
                <li
                  className={selectedItems.includes(item.id) ? 'active' : ''}
                  key={item.id}
                  onClick={() => handleTechClick(item.id)}
                >
                  {item.currentDuty}
                </li>
              ))}
            </ul>
          </S.CategoryFilterBox>
        </S.SearchFilterBox>
        <S.ListCardsContainer>
          <article>
            <div>
              <h3>멘토</h3>
            </div>
            <ul>
              <MentoCardItem />
            </ul>
          </article>
        </S.ListCardsContainer>
      </S.ListSearchContainer>
      <S.PaginationContainer>
        <ul>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li className="next">다음</li>
        </ul>
      </S.PaginationContainer>
    </S.ListWrapper>
  );
};

export default MentoListLayout;
