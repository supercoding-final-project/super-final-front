import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'src/components/common/icon/Icon';

import { dutyType } from './dutyType';
import * as S from './List.style';
import ListSearchFilterContainer from './ListSearchFilterContainer';
import PageBtn from './PageBtn';
import MentoCardItem from '../main/MentoCardItem';
import { skillStackType } from './skillStackType';
// import { useRecoilState } from 'recoil';
// import { keywordAtom, mentorListAtom } from 'src/store/filter/recoilState';

const MentoListLayout = () => {
  // 필터링 더미데이터
  const [dutyTypeData, setDutyTypeData] = useState(dutyType);
  const [skillStackTypeData, setSkillStackTypeData] = useState(skillStackType);
  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);

  // 모든 멘토 조회 API
  const [mentors, setMentors] = useState([]);
  // const [mentors, setMentors] = useRecoilState(mentorListAtom);
  // 멘토 키워드 조회 API
  const [mentorsKeyword, setMentorsKeyword] = useState([]);
  // const [mentorsKeyword, setMentorsKeyword] = useRecoilState(keywordAtom);
  const [keyword, setKeyword] = useState(''); // 입력 값을 관리하는 상태
  const [activeTab, setActiveTab] = useState('mento'); // 초기값으로 'mento' 탭을 활성화

  const handleTechClick1 = (item) => {
    if (selectedItems1.includes(item)) {
      setSelectedItems1(selectedItems1.filter((i) => i !== item));
    } else {
      setSelectedItems1([...selectedItems1, item]);
    }
  };

  const handleTechClick2 = (item) => {
    if (selectedItems2.includes(item)) {
      setSelectedItems2(selectedItems2.filter((i) => i !== item));
    } else {
      setSelectedItems2([...selectedItems2, item]);
    }
  };

  const getMentoCard = async () => {
    const res = await axios.get('https://codevelop.store/api/v1/mentors?pageSize=8');
    setMentors(res.data.data.content);
    console.log(mentors);
  };

  useEffect(() => {
    getMentoCard();
  }, []);

  const getMentorKeywordCard = async () => {
    try {
      const res = await axios.get(`https://codevelop.store/api/v1/mentors?keyword=${keyword}`);
      setMentorsKeyword(res.data.data.content);
      console.log('mentorsKeyword', mentorsKeyword);
    } catch (error) {
      console.error('API 요청 에러:', error);
    }
  };

  useEffect(() => {
    getMentorKeywordCard();
  }, [keyword]); // keyword 상태가 변경될 때마다 API 요청을 다시 보냄

  const handleInputChange = (e) => {
    setKeyword(e.target.value); // useState()
    // setSearchInput(e.target.value); // recoil
  };

  const handleTabClick = (tab) => {
    // setActiveTab(tab); // useState()
    setActiveTab(tab); // recoil
  };

  // const handleSearch = () => {
  //   if (activeTab === 'mento') {
  //     navigate('/list/mento'); // 멘토 탭이 active일 때 '/list/mento'로 이동
  //   } else if (activeTab === 'post') {
  //     navigate('/list/post'); // POST 탭이 active일 때 '/list/post'로 이동
  //   }
  //   // 여기서 검색 결과를 필터링하고 표시하도록 로직을 추가하세요.
  //   // 검색 결과를 state에 저장하고, 이를 렌더링하는 방식으로 구현할 수 있습니다.
  // };

  // const getMentoKeywordCard = async () => {
  //   const res = await axios.get('https://codevelop.store/api/v1/mentors?keyword=진수');
  //   // setMentorsKeyword(res.data.data.content);
  //   console.log('mentorsKeyword', mentorsKeyword);
  // };

  // useEffect(() => {
  //   getMentoKeywordCard();
  // }, []);

  // mentorsKeyword 상태에 따라 멘토 카드를 필터링하여 출력
  const filteredMentors = mentorsKeyword.length > 0 ? mentorsKeyword : mentors;

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
          <ListSearchFilterContainer
            activeTab={activeTab}
            // handleSearch={handleSearch}
            handleInputChange={handleInputChange}
            keyword={keyword}
          />
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
                  className={selectedItems1.includes(item.id) ? 'active' : ''}
                  key={item.id}
                  onClick={() => handleTechClick1(item.id)}
                >
                  {item.currentDuty}
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
        </S.SearchFilterBox>
        <S.ListCardsContainer>
          <article>
            <div>
              <h3>멘토</h3>
            </div>
            <ul>
              {filteredMentors.map((data, index) => (
                <MentoCardItem key={index} data={data} />
              ))}
            </ul>
            {/* <ul>
              {mentors.map((data, index) => (
                <MentoCardItem key={index} data={data} />
              ))}
            </ul> */}
          </article>
        </S.ListCardsContainer>
      </S.ListSearchContainer>
      <S.PaginationContainer>
        <PageBtn />
      </S.PaginationContainer>
    </S.ListWrapper>
  );
};

export default MentoListLayout;
