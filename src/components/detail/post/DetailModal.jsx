import { Link } from 'react-router-dom';

import * as S from './Detail.style';

const PostModal = () => {
  return (
    <S.PostModal>
      <S.PostModalWrap>
        <S.PostModalContainer>
          <div>1:1 코드리뷰</div>
          <div>
            1시간/
            <span>49,000P</span>
          </div>
        </S.PostModalContainer>
      </S.PostModalWrap>
      <S.ModalBtn>
        <div>
          <button>신청하기</button>
        </div>
        <div>
          <Link to="/chatroom">
            <button>문의하기</button>
          </Link>
        </div>
      </S.ModalBtn>
    </S.PostModal>
  );
};

export default PostModal;
