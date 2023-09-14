import { useRecoilState } from 'recoil';
import { postRequestAtom } from 'src/store/post/postRequestAtom';

import * as S from './PostModal.style';

const PostModal = () => {
  const [requestData, setRequestData] = useRecoilState(postRequestAtom);

  const postHandler = () => {
    console.log(requestData);
  };
  return (
    <S.PostModal>
      <S.PostModalWrap>
        <S.PostModalContainer>
          <div>1:1 코드리뷰</div>
          <div>가격(시간 당)</div>
        </S.PostModalContainer>
      </S.PostModalWrap>
      <S.ModalBtn>
        <button onClick={postHandler}>등록하기</button>
      </S.ModalBtn>
    </S.PostModal>
  );
};

export default PostModal;
