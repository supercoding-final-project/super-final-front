import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'src/components/common/icon/Icon';

import { dutyType } from './dutyType';
import * as S from './List.style';
import ListSearchFilterContainer from './ListSearchFilterContainer';
import PageMentorBtn from './PageMentorBtn';
import { skillStackType } from './skillStackType';
import MentoCardItem from '../main/MentorCardItem';
// import { useRecoilState } from 'recoil';
// import { keywordAtom, mentorListAtom } from 'src/store/filter/recoilState';

const ListMentoLayout = () => {
  // 필터링 더미데이터
  const [dutyTypeData, setDutyTypeData] = useState(dutyType);
  const [skillStackTypeData, setSkillStackTypeData] = useState(skillStackType);
  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);

  // 모든 멘토 조회 API
  const [mentors, setMentors] = useState([]);
  // const [mentors, setMentors] = useRecoilState(mentorListAtom);
  // 멘토 페이징 API
  // const [mentorsPaging, setMentorsPaging] = useState([]); // Store the list of mentors
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지를 상태로 관리
  const [totalPages, setTotalPages] = useState(1); // 초기값 1로 설정

  // 멘토 키워드 조회 API
  const [mentorsKeyword, setMentorsKeyword] = useState([]);
  // const [mentorsKeyword, setMentorsKeyword] = useRecoilState(keywordAtom);
  const [keyword, setKeyword] = useState(''); // 입력 값을 관리하는 상태
  const [activeTab, setActiveTab] = useState('mento'); // 초기값으로 'mento' 탭을 활성화

  // const pageSize = 8; // 페이지 크기를 설정합니다.

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

  // const getMentoCard = async () => {
  //   const res = await axios.get('https://codevelop.store/api/v1/mentors?pageSize=8');
  //   // const res = await axios.get('https://codevelop.store/api/v1/mentors?');
  //   setMentors(res.data.data.content);
  //   console.log(mentors);
  //   //이거 주의
  //   // mentorsKeyword.length > 0 ? mentorsKeyword : mentors;
  // };

  // useEffect(() => {
  //   getMentoCard();
  // }, []);

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

  // mentorsKeyword 상태에 따라 멘토 카드를 필터링하여 출력
  // const filteredMentors = mentorsKeyword.length > 0 ? mentorsKeyword : mentors;
  // 10/6 도오오오ㅗ전
  const filteredMentors = mentorsKeyword.length > 0 ? mentorsKeyword : mentors;

  useEffect(() => {
    // API로부터 멘토 데이터를 가져오는 함수
    const getMentoCard = async () => {
      const res = await axios.get(
        `https://codevelop.store/api/v1/mentors?pageSize=8&page=${currentPage}`,
      );
      setMentors(res.data.data.content);
      setTotalPages(Math.ceil(res.data.data.totalElements / 8));
    };

    getMentoCard();
  }, [currentPage]);

  // useEffect(() => {
  //   // API로부터 멘토 데이터를 가져오는 함수
  //   const getMentoCard = async () => {
  //     const res = await axios.get(
  //       `https://codevelop.store/api/v1/mentors?pageSize=${pageSize}&page=${currentPage}`,
  //     );
  //     setMentors(res.data.data.content);
  //     setTotalPages(Math.ceil(res.data.data.totalElements / pageSize));
  //   };

  //   getMentoCard();
  // }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  //

  return (
    <S.ListWrapper>
      <S.ListSearchContainer>
        <S.ListSearchList>
          <S.ListSearchItem>
            <Link to="/list/post">POST</Link>
          </S.ListSearchItem>
          <S.ListSearchItem className="active">멘토</S.ListSearchItem>
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
            {/* 두 상태값 병합 테스트 으아악 */}
            {/* {() => setMentors((prev) => prev + 1)} */}
            {/* <S.Pagenation getMentoCard>
              <ul>
                {filteredMentors.map((data, index) => (
                  <MentoCardItem key={index} data={data} />
                ))}
              </ul>
            </S.Pagenation> */}

            {/* 이게 페이지네이션 */}
            {/* <ul>
              {mentors.map((mentor) => (
                <MentoCardItem key={mentor.mentorId} data={mentor} />
              ))}
              {console.log('mentors', mentors)}
            </ul> */}
            {/* 이게 검색 */}
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
        {/* <PageBtn mentorsPaging={mentorsPaging} setMentorsPaging={setMentorsPaging} /> */}
        <PageMentorBtn
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </S.PaginationContainer>
    </S.ListWrapper>
  );
};

export default ListMentoLayout;
