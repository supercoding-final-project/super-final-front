// import axios from 'axios';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useJwtToken from 'src/hooks/useJwt';
import { usePostRequest } from 'src/hooks/usePostRequest';
import { postRequestAtom } from 'src/store/post/postRequestAtom';

import * as S from './PostModal.style';

const PostModal = (props) => {
  const [postId, setPostId] = useState(10);
  const [requestData, setRequestData] = useRecoilState(postRequestAtom);
  const [price, setPrice] = useState(null);
  const { jwtToken } = useJwtToken();
  const updatePostData = usePostRequest();
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
    props.setShowModal(false);
    document.body.style.overflowY = 'auto';
    const res = await axios.post('https://codevelop.store/api/v1/post', requestData, {
      headers: {
        Authorization: jwtToken,
      },
    });
    // setPostId(res.data.data.postId);
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
      <Link to={`/detail/${postId}`}>
        <S.ModalBtn>
          <button onClick={postHandler}>등록하기</button>
        </S.ModalBtn>
      </Link>
    </S.PostModal>
  );
};

export default PostModal;
