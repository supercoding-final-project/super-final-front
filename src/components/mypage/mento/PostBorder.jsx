import PostCardItem from 'src/pages/main/PostCardItem';

import Pagination from './Pagination';
import * as S from './PostBorder.style';

const PostBorder = () => {
  return (
    <>
      <S.Container>
        <PostCardItem></PostCardItem>
        <PostCardItem></PostCardItem>
        <PostCardItem></PostCardItem>
        <PostCardItem></PostCardItem>
        <PostCardItem></PostCardItem>
      </S.Container>

      <Pagination></Pagination>
    </>
  );
};

export default PostBorder;
