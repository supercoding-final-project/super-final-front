import { useCallback, useEffect, useRef, useState } from 'react';
import { usePostRequest } from 'src/hooks/usePostRequest';

import InputList from './InputList';
import * as S from './PostInputBox.style';

const PostInputBox = (props) => {
  const [inputs, setInputs] = useState(['']);
  const inputRefs = useRef([]);
  const isFirstRender = useRef(true);
  const updatePostData = usePostRequest();

  const handleKeyUp = (e, i) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (i === inputs.length - 1 && inputs[i].trim() !== '') {
        const newInputs = [...inputs, ''];
        setInputs(newInputs);
      }
    }
  };

  const handleOnChange = useCallback(
    (e, i) => {
      const newInputs = [...inputs];
      newInputs[i] = e.target.value;
      setInputs(newInputs);
      updatePostData(props.recoilKey, newInputs);
    },
    [inputs],
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    inputRefs.current[inputs.length - 1]?.focus();
  }, [inputs]);

  return (
    <S.InputBox>
      <div>
        <span>{props.ol}</span>
        <ol>
          {inputs.map((input, index) => (
            <InputList
              key={index}
              value={input}
              ref={(ref) => (inputRefs.current[index] = ref)}
              onChange={(e) => handleOnChange(e, index)}
              onKeyUp={(e) => handleKeyUp(e, index)}
            />
          ))}
        </ol>
      </div>
    </S.InputBox>
  );
};

export default PostInputBox;
