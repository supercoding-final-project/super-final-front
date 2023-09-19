// import axios from 'axios';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import useJwtToken from 'src/hooks/useJwt';
import { usePostRequest } from 'src/hooks/usePostRequest';
import { postRequestAtom } from 'src/store/post/postRequestAtom';

import * as S from './PostModal.style';

const PostModal = (props) => {
  const [requestData, setRequestData] = useRecoilState(postRequestAtom);
  const [price, setPrice] = useState(0);
  const { jwtToken } = useJwtToken();
  const updatePostData = usePostRequest();
  const handleOnChange = useCallback(
    (e) => {
      const inputPrice = e.target.value;
      setPrice(inputPrice);
      if (price.trim() !== '') {
        updatePostData(props.recoilKey, inputPrice);
      }
    },
    [price],
  );

  const postHandler = async () => {
    axios
      .post(
        'https://codevelop.store/api/v1/post',
        { params: requestData },
        {
          headers: {
            Authorization: jwtToken,
          },
        },
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <S.PostModal>
      <S.PostModalWrap>
        <S.PostModalContainer>
          <div>1:1 코드리뷰</div>
          <div>
            1시간/
            <input value={price} onChange={handleOnChange} placeholder="가격 (P)" />
          </div>
        </S.PostModalContainer>
      </S.PostModalWrap>
      <S.ModalBtn>
        <button onClick={postHandler}>등록하기</button>
      </S.ModalBtn>
    </S.PostModal>
  );
};

export default PostModal;
