import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'src/components/common/icon/Icon';

import { levelType } from './levelType';
import * as S from './List.style';
import ListSearchFilterContainer from './ListSearchFilterContainer';
// import PageMentorBtn from './PageMentorBtn';
// import PagePostBtn from './PagePostBtn';
import { skillStackCategoryType } from './skillStackCategoryType';
import { skillStackType } from './skillStackType';
import PostCardItem from '../main/PostCardItem';

const ListPostLayout = () => {
  // 모든 POST 조회 API
  const [posts, setPosts] = useState([]);

  // 멘토 페이징 API
  // const [currentPage, setCurrentPage] = useState(1); // 현재 페이지를 상태로 관리
  // const [totalPages, setTotalPages] = useState(1); // 초기값 1로 설정

  // POST 키워드 조회 API
  const [postsKeyword, setPostsKeyword] = useState([]);
  const [keyword, setKeyword] = useState(''); // 입력 값을 관리하는 상태
  const [activeTab, setActiveTab] = useState('post'); // 초기값으로 'post' 탭을 활성화

  // POST 필터링 조회 API
  // 다중 필터링에 사용할 상태 변수들
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);

  // 필터링된 데이터를 저장할 상태 변수
  const [filteredBtnPosts, setFilteredBtnPosts] = useState([]);

  // 필터링 더미데이터
  const [skillStackCategoryTypeData, setSkillStackCategoryTypeData] =
    useState(skillStackCategoryType);
  const [skillStackTypeData, setSkillStackTypeData] = useState(skillStackType);
  const [levelTypeData, setLevelTypeData] = useState(levelType);
  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const [selectedItems3, setSelectedItems3] = useState([]);

  // const [page, setPage] = useState(1);

  // POST 필터 API
  // const getPostCardFiltered = async () => {
  //   // const res = await axios.get(`https://codevelop.store/api/v1/post/search?word=&page=1&size=4`);
  //   // const res = await axios.get(`/api/v1/post/search?word="SPRING"&page=1&size=8`);
  //   const res = await axios.get(`/api/v1/post/search?word= &{filtering}&page=1&size=8`);
  //   // setLevelTypeData(res.data.data.postList);
  //   setPosts(res.data.data.postList);
  //   console.log('posts', posts);
  //   console.log('필터리드res.data.data.postList', res.data.data.postList);
  // };

  // useEffect(() => {
  //   getPostCardFiltered();
  // }, []);

  // const handleTechClick1 = (item) => {
  //   // 이미 선택된 아이템이라면 선택 해제
  //   if (selectedItems1.includes(item)) {
  //     setSelectedItems1(selectedItems1.filter((i) => i !== item));
  //   } else {
  //     // 새로운 아이템 선택
  //     setSelectedItems1([...selectedItems1, item]);
  //   }
  // };

  // const handleTechClick2 = (item) => {
  //   if (selectedItems2.includes(item)) {
  //     setSelectedItems2(selectedItems2.filter((i) => i !== item));
  //   } else {
  //     // 새로운 아이템 선택
  //     setSelectedItems2([...selectedItems2, item]);
  //   }
  // };

  // const handleTechClick3 = (item) => {
  //   if (selectedItems3.includes(item)) {
  //     setSelectedItems3(selectedItems3.filter((i) => i !== item));
  //   } else {
  //     // 새로운 아이템 선택
  //     setSelectedItems3([...selectedItems3, item]);
  //   }
  // };

  // -----
  const getPostKeywordCard = async () => {
    try {
      // const res = await axios.get(`https://codevelop.store/api/v1/mentors?keyword=${keyword}`);
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
  const filteredPosts = postsKeyword.length > 0 ? postsKeyword : posts;

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  //

  //////////
  const getPostCard = async () => {
    // const res = await axios.get(`https://codevelop.store/api/v1/post/search?word= &page=1&size=8`);
    const res = await axios.get(`https://codevelop.store/api/v1/post/search?word= &page=1&size=8`);
    setPosts(res.data.data.postList);
    console.log('posts', posts);
  };

  useEffect(() => {
    getPostCard();
  }, []);
  ////////////

  // 필터링 api 코드
  //선택한 필터링 옵션에 따라 데이터를 필터링하는 함수
  const filterPosts = () => {
    // posts를 필터링하는 로직을 작성합니다.
    const filteredData = posts.filter((post) => {
      // 카테고리, 스택, 레벨에 따라 필터링 조건을 작성하세요.
      const passCategoryFilter =
        selectedCategories.length === 0 || selectedCategories.includes(post.category);
      const passStackFilter = selectedStacks.length === 0 || selectedStacks.includes(post.stack);
      const passLevelFilter = selectedLevels.length === 0 || selectedLevels.includes(post.level);

      // 모든 필터링 조건을 만족하는 데이터만 반환합니다.
      return passCategoryFilter && passStackFilter && passLevelFilter;
    });

    // 필터링된 데이터를 상태 변수에 저장합니다.
    setFilteredBtnPosts(filteredData);
  };

  // 선택한 필터 옵션이 변경될 때마다 필터링 함수를 호출합니다.
  // useEffect(() => {
  //   filteredBtnPosts();
  // }, [selectedCategories, selectedStacks, selectedLevels]);

  // 선택한 필터 값을 업데이트하는 함수
  const handleTechClick1 = (categoryId) => {
    // 선택한 카테고리 값을 업데이트합니다.
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(categoryId)) {
        // 이미 선택된 경우 제거
        return prevSelected.filter((id) => id !== categoryId);
      } else {
        // 선택되지 않은 경우 추가
        return [...prevSelected, categoryId];
      }
    });
  };

  const handleTechClick2 = (stackId) => {
    // 선택한 스택 값을 업데이트합니다.
    setSelectedStacks((prevSelected) => {
      if (prevSelected.includes(stackId)) {
        // 이미 선택된 경우 제거
        return prevSelected.filter((id) => id !== stackId);
      } else {
        // 선택되지 않은 경우 추가
        return [...prevSelected, stackId];
      }
    });
  };

  const handleTechClick3 = (levelId) => {
    // 선택한 레벨 값을 업데이트합니다.
    setSelectedLevels((prevSelected) => {
      if (prevSelected.includes(levelId)) {
        // 이미 선택된 경우 제거
        return prevSelected.filter((id) => id !== levelId);
      } else {
        // 선택되지 않은 경우 추가
        return [...prevSelected, levelId];
      }
    });
  };

  // 선택한 필터 옵션이 변경될 때마다 필터링 함수를 호출합니다.
  // useEffect(() => {
  //   filteredBtnPosts();
  // }, [selectedCategories, selectedStacks, selectedLevels]);

  useEffect(() => {
    filterPosts(); // 선택한 필터 항목이 변경될 때마다 필터링 함수를 호출합니다.
  }, [selectedCategories, selectedStacks, selectedLevels]);

  // Axios를 사용하여 API를 호출하고 데이터를 가져오는 함수
  const fetchPosts = async () => {
    try {
      // Axios를 사용하여 API를 호출하고 필터링된 데이터를 가져옵니다.
      const response = await axios.get(
        // `https://codevelop.store/api/v1/post/search?word=SPRING&page=1&size=8&stackCategory=${selectedCategories.join(
        //   ',',
        // )}&stacks=${selectedStacks.join(',')}&levels=${selectedLevels.join(',')}`,
        `https://codevelop.store/api/v1/post/search?word=dummy&page=1&size=8&stackCategory=BACKEND&&skillStack=SPRING_BOOT`,
      );

      // API 응답에서 필터링된 데이터를 추출합니다.
      const filteredData = response.data; // 필터링된 데이터에 따라 응답 구조를 수정하세요.

      // 필터링된 데이터를 상태 변수에 저장합니다.
      setFilteredBtnPosts(filteredData);
    } catch (error) {
      // 오류 처리
      console.error('API 호출 오류:', error);
    }
  };

  useEffect(() => {
    fetchPosts(); // 필터 항목이 변경될 때마다 API를 호출합니다.
  }, [selectedCategories, selectedStacks, selectedLevels]);

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
          <ListSearchFilterContainer
            // activeTab={activeTab}
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
              {posts.map((post) => (
                <PostCardItem key={post.postId} data={post} />
              ))}
              {/* {filteredBtnPosts.map((post) => (
                <PostCardItem key={post.postId} data={post} />
              ))} */}
            </ul>
          </article>
        </S.ListCardsContainer>
      </S.ListSearchContainer>
      <S.PaginationContainer>
        {/* <PagePostBtn
        // totalPages={totalPages}
        // currentPage={currentPage}
        // onPageChange={handlePageChange}
        /> */}
      </S.PaginationContainer>
    </S.ListWrapper>
  );
};

export default ListPostLayout;
