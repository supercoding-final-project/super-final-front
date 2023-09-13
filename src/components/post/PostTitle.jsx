import { useState } from 'react';
import { usePostRequest } from 'src/hooks/usePostRequest';

import * as S from './PostBox.style';

const PostTitle = () => {
  const [title, setTitle] = useState('');
  const updatePostData = usePostRequest();

  return (
    <S.TitleBox>
      <input placeholder="제목을 입력해주세요" />
    </S.TitleBox>
  );
};

export default PostTitle;
