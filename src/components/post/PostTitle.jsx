import { useCallback, useState } from 'react';
import { usePostRequest } from 'src/hooks/usePostRequest';

import * as S from './PostBox.style';

const PostTitle = (props) => {
  const [title, setTitle] = useState('');
  const updatePostData = usePostRequest();

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

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
      <input
        value={title}
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
        placeholder="제목을 입력해주세요"
      />
    </S.TitleBox>
  );
};

export default PostTitle;
