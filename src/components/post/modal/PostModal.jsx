// import axios from 'axios';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useJwtToken from 'src/hooks/useJwt';
import { usePostRequest } from 'src/hooks/usePostRequest';
import { useShowToast } from 'src/hooks/useToast';
import { postRequestAtom } from 'src/store/post/postRequestAtom';

import * as S from './PostModal.style';

const PostModal = (props) => {
  const [requestData, setRequestData] = useRecoilState(postRequestAtom);
  const [price, setPrice] = useState(null);
  const { jwtToken } = useJwtToken();
  const updatePostData = usePostRequest();
  let navigate = useNavigate();

  const handleOnChange = useCallback(
    (e) => {
      const inputPrice = e.target.value;
      const numericPrice = inputPrice.replace(/[^0-9]/g, '');
      setPrice(numericPrice);
      if (numericPrice !== '') {
        updatePostData(props.recoilKey, inputPrice);
      }
    },
    [price],
  );

  const postHandler = async () => {
    try {
      const res = await axios.post('https://codevelop.store/api/v1/post', requestData, {
        headers: {
          Authorization: jwtToken,
        },
      });

      props.setShowModal(false);
      document.body.style.overflowY = 'auto';
      const postId = res.data.data;
      navigate(`/detail/${postId}`);
    } catch (err) {
      useShowToast(err.response.data.message, 'top-center', 2000);
    }
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
