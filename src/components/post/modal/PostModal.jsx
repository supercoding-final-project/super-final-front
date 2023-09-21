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
  const [redirectPath, setRedirectPath] = useState(null);
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
    setRedirectPath(`/detail/${res.data.data}`);
  };

  if (redirectPath) {
    return <Link to={redirectPath} />;
  }
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
        <button onClick={postHandler} disabled={price.length === 0}>
          등록하기
        </button>
      </S.ModalBtn>
    </S.PostModal>
  );
};

export default PostModal;
