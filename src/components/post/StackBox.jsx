import { useState } from 'react';
import { usePostRequest } from 'src/hooks/usePostRequest';

import * as S from './PostBox.style';

const StackBox = (props) => {
  const [isActive, setIsActive] = useState(null);
  const updatePostData = usePostRequest();

  const handleImageClick = (stack) => {
    setIsActive(stack === isActive ? null : stack);
    updatePostData(props.recoilKey, stack);
  };

  return (
    <S.StackBox>
      <div>코드 리뷰를 진행할 기술 스택 중 하나를 선택해 주세요!</div>
      <div>
        {props.mentorStack &&
          props.mentorStack.map((stack, i) => (
            <S.StackImg
              key={i}
              src={stack.skillStackImg}
              active={stack.skillStackName === isActive}
              onClick={() => handleImageClick(stack.skillStackName)}
            />
          ))}
      </div>
    </S.StackBox>
  );
};

export default StackBox;
