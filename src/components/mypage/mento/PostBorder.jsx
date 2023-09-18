import { useState } from 'react';
import PostCardItem from 'src/pages/main/PostCardItem';

import Pagination from './Pagination';
import * as S from './PostBorder.style';

const PostBorder = ({ User }) => {

  console.log(User)
  const [page, setPage] = useState(1)
  // const url = `/api/v1/post/search/mentor?word="${멘토}"&page=${page}&size=3`


  return (

    <>
      <S.CardBox>
        <PostCardItem></PostCardItem>
        <PostCardItem></PostCardItem>
        <PostCardItem></PostCardItem>
        <PostCardItem></PostCardItem>
        <PostCardItem></PostCardItem>
      </S.CardBox>
      <Pagination currentPage={page} onPageChange={setPage} />

    </>
  );
};

export default PostBorder;
