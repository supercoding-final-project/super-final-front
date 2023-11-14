import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'src/components/common/icon/Icon';

import { levelType } from './levelType';
import * as S from './List.style';
import ListSearchFilterContainer from './ListSearchFilterContainer';
import PagePostBtn from './PagePostBtn';
import { skillStackCategoryType } from './skillStackCategoryType';
import { skillStackType } from './skillStackType';
import PostCardItem from '../main/PostCardItem';

const ListPostLayout = () => {
  // 필터 펼치기, 숨기기
  const [collapse, setCollapse] = useState(true);

  const foldFilterBox = () => {
    setCollapse(!collapse);
  };

  // 모든 POST 조회 API
  const [posts, setPosts] = useState([]);

  // 멘토 페이징 API
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지를 상태로 관리
  const [totalPages, setTotalPages] = useState(1); // 초기값 1로 설정

  // POST 키워드 조회 API
  const [postsKeyword, setPostsKeyword] = useState([]);
  const [keyword, setKeyword] = useState(''); // 입력 값을 관리하는 상태
  const [activeTab, setActiveTab] = useState('post'); // 초기값으로 'post' 탭을 활성화

  // POST 필터링 조회 API
  // 다중 필터링에 사용할 상태 변수들
  // const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredStacks, setFilteredStacks] = useState([]);
  const [filteredLevels, setFilteredLevels] = useState([]);

  // 필터링 더미데이터
  const [skillStackCategoryTypeData, setSkillStackCategoryTypeData] =
    useState(skillStackCategoryType);
  const [skillStackTypeData, setSkillStackTypeData] = useState(skillStackType);
  const [levelTypeData, setLevelTypeData] = useState(levelType);

  // POST 필터 API
  const getPostCardFiltered = async () => {
    const res = await axios.get(`/api/v1/post/search?word="SPRING"&page=1&size=8`);
    // const res = await axios.get(`/api/v1/post/search?word= &{filtering}&page=1&size=8`);
    // setLevelTypeData(res.data.data.postList);
    setPosts(res.data.data.postList);
    console.log('posts', posts);
    console.log('필터리드res.data.data.postList', res.data.data.postList);
  };

  useEffect(() => {
    getPostCardFiltered();
  }, []);

  const handleTechClick1 = (item) => {
    // 이미 선택된 아이템이라면 선택 해제
    if (skillStackCategoryTypeData.includes(item)) {
      setSkillStackCategoryTypeData(skillStackCategoryTypeData.filter((i) => i !== item));
    } else {
      // 새로운 아이템 선택
      setSkillStackCategoryTypeData([...skillStackCategoryTypeData, item]);
    }
  };

  const handleTechClick2 = (item) => {
    if (skillStackTypeData.includes(item)) {
      setSkillStackTypeData(skillStackTypeData.filter((i) => i !== item));
    } else {
      // 새로운 아이템 선택
      setSkillStackTypeData([...skillStackTypeData, item]);
    }
  };

  const handleTechClick3 = (item) => {
    if (levelTypeData.includes(item)) {
      setLevelTypeData(levelTypeData.filter((i) => i !== item));
    } else {
      // 새로운 아이템 선택
      setLevelTypeData([...levelTypeData, item]);
    }
  };

  // 필터링된 데이터를 저장할 상태 변수
  const [filteredBtnPosts, setFilteredBtnPosts] = useState([]);

  const getPostKeywordCard = async () => {
    try {
      const res = await axios.get(
        `https://codevelop.store/api/v1/post/search?word= &page=1&size=8`,
      );

      setPostsKeyword(res.data.data.postList);
      console.log('postsKeyword', postsKeyword);
    } catch (error) {
      console.error('API 요청 에러:', error);
    }
  };

  useEffect(() => {
    getPostKeywordCard();
  }, [keyword]); // keyword 상태가 변경될 때마다 API 요청을 다시 보냄

  const handleInputChange = (e) => {
    setKeyword(e.target.value); // useState()
  };

  // postsKeyword 상태에 따라 POST 카드를 필터링하여 출력
  // const filteredPosts = postsKeyword.length > 0 ? postsKeyword : posts;

  // useEffect(() => {
  //   // API로부터 POST 데이터를 가져오는 함수
  //   const getPostCard = async () => {
  //     const res = await axios.get(
  //       // `https://codevelop.store/api/v1/mentors?pageSize=8&page=${currentPage}`,
  //       `https://codevelop.store/api/v1/post/search?word= &page=1&size=8`,
  //     );
  //     setPosts(res.data.data.postList);
  //     setTotalPages(Math.ceil(res.data.data.totalElements / 8));
  //   };

  //   getPostCard();
  // }, [currentPage]);

  //

  const getPostCard = async () => {
    const res = await axios.get(`https://codevelop.store/api/v1/post/search?word= &page=1&size=8`);
    setPosts(res.data.data.postList);
    console.log('posts', posts);
  };

  useEffect(() => {
    getPostCard();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `https://codevelop.store/api/v1/post/search?word=dummy&page=1&size=8&stackCategory=BACKEND&&skillStack=SPRING_BOOT`,
      );
      // API 응답에서 필터링된 데이터를 추출합니다.
      const filteredData = response.data; // 필터링된 데이터에 따라 응답 구조를 수정하세요.
      // 필터링된 데이터를 상태 변수에 저장합니다.
      setFilteredBtnPosts(filteredData);
      console.log('필터에러좀보자', filteredData);
    } catch (error) {
      console.error('API 호출 오류:', error);
    }
  };

  useEffect(() => {
    fetchPosts(); // 필터 항목이 변경될 때마다 API를 호출합니다.
  }, [skillStackCategoryTypeData, filteredStacks, filteredLevels]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <S.ListWrapper>
      <S.ListSearchContainer>
        <S.ListSearchList>
          <S.ListSearchItem className="active">POST</S.ListSearchItem>
          <S.ListSearchItem>
            <Link to="/list/mentor">멘토</Link>
          </S.ListSearchItem>
        </S.ListSearchList>
        <S.ListSearchBox>
          <ListSearchFilterContainer
            activeTab={activeTab}
            handleInputChange={handleInputChange}
            keyword={keyword}
          />
        </S.ListSearchBox>
        <S.SearchFilterBox>
          <h3>
            <p>검색 필터</p>
            <p className="fold" onClick={foldFilterBox}>
              <Icon name="Fold" size={20} />
              <span>{collapse ? '접기' : '펼치기'}</span>
            </p>
          </h3>
          {collapse && (
            <>
              <S.CategoryFilterBox>
                <h3>
                  <Icon name="Circle" size={20} />
                  <span>직무</span>
                </h3>
                <ul>
                  {skillStackCategoryTypeData.map((item) => (
                    <li
                      className={skillStackCategoryTypeData.includes(item.id) ? 'active' : ''}
                      key={item.id}
                      onClick={() => handleTechClick1(item.id)}
                    >
                      {item.skillStackCategoryType}
                    </li>
                  ))}
                  {/* {filteredCategories.map((item) => (
                    <li
                      className={filteredCategories.includes(item) ? 'active' : ''}
                      key={item}
                      onClick={() => handleTechClick1(item)}
                    >
                      {item}
                    </li>
                  ))} */}
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
                      className={skillStackTypeData.includes(item.id) ? 'active' : ''}
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
                      className={levelTypeData.includes(item.id) ? 'active' : ''}
                      key={item.id}
                      onClick={() => handleTechClick3(item.id)}
                    >
                      {item.level}
                    </li>
                  ))}
                </ul>
              </S.CategoryFilterBox>
            </>
          )}
        </S.SearchFilterBox>
        <S.ListCardsContainer>
          <article>
            <div>
              <h3>POST</h3>
            </div>
            <ul>
              {posts.map((post) => (
                <PostCardItem key={post.postId} data={post} />
              ))}
            </ul>
          </article>
        </S.ListCardsContainer>
      </S.ListSearchContainer>
      <S.PaginationContainer>
        <PagePostBtn
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </S.PaginationContainer>
    </S.ListWrapper>
  );
};

export default ListPostLayout;
