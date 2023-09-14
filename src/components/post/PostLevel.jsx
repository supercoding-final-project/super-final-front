import { useState } from 'react';
import { usePostRequest } from 'src/hooks/usePostRequest';

import * as S from './PostBox.style';

const PostLevel = (props) => {
  const levels = ['입문', '초급', '중급', '고급', '최고급'];
  const [isActive, setIsActive] = useState(null);
  const updatePostData = usePostRequest();

  const handleButtonClick = (i) => {
    setIsActive(i);
    updatePostData(props.recoilKey, levels[i]);
  };

  return (
    <S.LevelBox>
      <div>코드 리뷰 난이도를 알려주세요!</div>
      <div>
        {levels.map((level, i) => (
          <S.LevelBtn key={i} onClick={() => handleButtonClick(i)} active={isActive === i}>
            {level}
          </S.LevelBtn>
        ))}
      </div>
    </S.LevelBox>
  );
};

export default PostLevel;
