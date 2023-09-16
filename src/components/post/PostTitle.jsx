import { useCallback, useState } from 'react';
import { usePostRequest } from 'src/hooks/usePostRequest';

import * as S from './PostBox.style';

const PostTitle = (props) => {
  const [title, setTitle] = useState('');
  const updatePostData = usePostRequest();

  const handleOnChange = useCallback(
    (e) => {
      const inputTitle = e.target.value;
      setTitle(inputTitle);
      if (title.trim() !== '') {
        updatePostData(props.recoilKey, inputTitle);
      }
    },
    [title],
  );

  return (
    <S.TitleBox>
      <input value={title} onChange={handleOnChange} placeholder="제목을 입력해주세요" />
    </S.TitleBox>
  );
};

export default PostTitle;
