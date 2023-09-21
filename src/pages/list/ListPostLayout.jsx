import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'src/components/common/icon/Icon';

import { levelType } from './levelType';
import * as S from './List.style';
import ListSearchFilterContainer from './ListSearchFilterContainer';
import PageBtn from './PageBtn';
import { skillStackCategoryType } from './skillStackCategoryType';
import { skillStackType } from './skillStackType';
import PostCardItem from '../main/PostCardItem';

const PostListLayout = () => {
  const [skillStackCategoryTypeData, setSkillStackCategoryTypeData] =
    useState(skillStackCategoryType);
  const [skillStackTypeData, setSkillStackTypeData] = useState(skillStackType);
  const [levelTypeData, setLevelTypeData] = useState(levelType);
  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const [selectedItems3, setSelectedItems3] = useState([]);
  const [page, setPage] = useState(1);

  const handleTechClick1 = (item) => {
    // 이미 선택된 아이템이라면 선택 해제
    if (selectedItems1.includes(item)) {
      setSelectedItems1(selectedItems1.filter((i) => i !== item));
    } else {
      // 새로운 아이템 선택
      setSelectedItems1([...selectedItems1, item]);
    }
  };

  const handleTechClick2 = (item) => {
    if (selectedItems2.includes(item)) {
      setSelectedItems2(selectedItems2.filter((i) => i !== item));
    } else {
      // 새로운 아이템 선택
      setSelectedItems2([...selectedItems2, item]);
    }
  };

  const handleTechClick3 = (item) => {
    if (selectedItems3.includes(item)) {
      setSelectedItems3(selectedItems3.filter((i) => i !== item));
    } else {
      // 새로운 아이템 선택
      setSelectedItems3([...selectedItems3, item]);
    }
  };

  return (
    <S.ListWrapper>
      <S.ListSearchContainer>
        <S.ListSearchList>
          <S.ListSearchItem>
            <Link to="/list/mento">멘토</Link>
          </S.ListSearchItem>
          <S.ListSearchItem className="active">POST</S.ListSearchItem>
        </S.ListSearchList>
        <S.ListSearchBox>
          <ListSearchFilterContainer />
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
              {skillStackCategoryTypeData.map((item) => (
                <li
                  className={selectedItems1.includes(item.id) ? 'active' : ''}
                  key={item.id}
                  onClick={() => handleTechClick1(item.id)}
                >
                  {item.skillStackCategoryType}
                </li>
              ))}
            </ul>
          </S.CategoryFilterBox>
          <S.CategoryFilterBox>
            <h3>
              <Icon name="Circle" size={20} />
              <span>스택</span>
            </h3>
            <ul>
              {skillStackTypeData.map((item) => (
                <li
                  className={selectedItems2.includes(item.id) ? 'active' : ''}
                  key={item.id}
                  onClick={() => handleTechClick2(item.id)}
                >
                  {item.postStack}
                </li>
              ))}
            </ul>
          </S.CategoryFilterBox>
          <S.CategoryFilterBox>
            <h3>
              <Icon name="Circle" size={20} />
              <span>레벨</span>
            </h3>
            <ul>
              {levelTypeData.map((item) => (
                <li
                  className={selectedItems3.includes(item.id) ? 'active' : ''}
                  key={item.id}
                  onClick={() => handleTechClick3(item.id)}
                >
                  {item.level}
                </li>
              ))}
            </ul>
          </S.CategoryFilterBox>
        </S.SearchFilterBox>
        <S.ListCardsContainer>
          <article>
            <div>
              <h3>POST</h3>
            </div>
            <ul>
              <PostCardItem />
            </ul>
          </article>
        </S.ListCardsContainer>
      </S.ListSearchContainer>
      <S.PaginationContainer>
        <PageBtn />
      </S.PaginationContainer>
    </S.ListWrapper>
  );
};

export default PostListLayout;
