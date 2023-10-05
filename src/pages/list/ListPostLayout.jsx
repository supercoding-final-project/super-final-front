import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'src/components/common/icon/Icon';

import { levelType } from './levelType';
import * as S from './List.style';
import ListSearchFilterContainer from './ListSearchFilterContainer';
import PageMentorBtn from './PageMentorBtn';
import { skillStackCategoryType } from './skillStackCategoryType';
import { skillStackType } from './skillStackType';
import PostCardItem from '../main/PostCardItem';
import axios from 'axios';
import PagePostBtn from './PagePostBtn';

const ListPostLayout = () => {
  // 필터링 더미데이터
  const [skillStackCategoryTypeData, setSkillStackCategoryTypeData] =
    useState(skillStackCategoryType);
  const [skillStackTypeData, setSkillStackTypeData] = useState(skillStackType);
  const [levelTypeData, setLevelTypeData] = useState(levelType);
  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const [selectedItems3, setSelectedItems3] = useState([]);

  // 모든 POST 조회 API
  const [posts, setPosts] = useState([]);
  // 멘토 페이징 API
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지를 상태로 관리
  const [totalPages, setTotalPages] = useState(1); // 초기값 1로 설정

  // POST 키워드 조회 API
  const [postsKeyword, setPostsKeyword] = useState([]);
  const [keyword, setKeyword] = useState(''); // 입력 값을 관리하는 상태
  const [activeTab, setActiveTab] = useState('post'); // 초기값으로 'post' 탭을 활성화

  // const [page, setPage] = useState(1);

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

  // -----
  const getPostKeywordCard = async () => {
    try {
      // const res = await axios.get(`https://codevelop.store/api/v1/mentors?keyword=${keyword}`);
      const res = await axios.get(
        `https://codevelop.store/api/v1/post/search?word= &page=1&size=12`,
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

  useEffect(() => {
    // API로부터 POST 데이터를 가져오는 함수
    const getPostCard = async () => {
      const res = await axios.get(
        // `https://codevelop.store/api/v1/mentors?pageSize=8&page=${currentPage}`,
        `https://codevelop.store/api/v1/post/search?word= &page=1&size=8`,
      );
      setPosts(res.data.data.postList);
      setTotalPages(Math.ceil(res.data.data.totalElements / 8));
    };

    getPostCard();
  }, [currentPage]);

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
