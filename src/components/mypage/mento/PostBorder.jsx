import { useState } from 'react';

import Pagination from './Pagination';
import * as S from './PostBorder.style';
import Postlist from './Postlist';

const PostBorder = ({ User }) => {

  console.log(User)
  const [page, setPage] = useState(1)
  const [postList, setPostList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40])
  const [currentPage, setCurrentPage] = useState(1)
  // const url = `/api/v1/post/search/mentor?word="${멘토}"&page=${page}&size=3`
  const size = 3;

  const currentPostList = (postList) => {
    const firstitem = currentPage * 3 - 3
    const lastitem = currentPage * 3
    const result = postList.slice(firstitem, lastitem)
    return result

  }
  return (

    <>
      <S.CardBox>
        <Postlist postList={currentPostList(postList)} />
      </S.CardBox>
      <Pagination postList={postList.length} size={size} setCurrentPage={setCurrentPage} currentPage={currentPage} />

    </>
  );
};

export default PostBorder;
