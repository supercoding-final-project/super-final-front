import Button from 'src/components/common/Button';
import * as S from './MainCardItem.style';
import { useState } from 'react';
import Modal from 'src/components/common/Modal';
import ModalCardBox from 'src/components/common/ModalCardBox';
import { theme } from 'src/globalLayout/GlobalStyle';
import { Link } from 'react-router-dom';

const PostCardItem = () => {
  // 모달이 열리는 위치에 필요한 코드 1/3
  const [showModal, setShowModal] = useState(false);
  // 모달이 열리는 위치에 필요한 코드 2/3
  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  return (
    <>
      <S.MainCardItem>
        <h4>POST 입니다. 가로 넓이 280기준.</h4>
        <S.StackBox>
          <div className="stack">
            <p className="title">분야</p>
            <p className="desc">#개발 #프로그래밍</p>
          </div>
          <div className="stack">
            <p className="title">스택</p>
            <p className="desc">#Node.js #React</p>
          </div>
          <div className="stack bold">
            <p className="title">가격</p>
            <p className="desc">99,000P</p>
          </div>
        </S.StackBox>
        <S.NickNameBox>
          <div className="stack">
            <p className="title">닉네임</p>
            <p className="desc bold">입문,초급,중급(택1)</p>
          </div>
        </S.NickNameBox>
        <hr />
        <S.MainCardButtonBox>
          <Link to="/chatroom">
            <Button text={'문의하기'} bgcolor={theme.color.point} fontcolor={theme.color.bgc1} />
          </Link>
          <Button
            text={'상세보기'}
            bgcolor={theme.color.point}
            fontcolor={theme.color.bgc1}
            onClick={handleModalOpen}
          />
        </S.MainCardButtonBox>
      </S.MainCardItem>
      {/* 모달이 열리는 위치에 필요한 코드 3/3 - <Modal></Modal> 사이에는 클릭시 열릴 모달의 콘텐츠를 import */}
      {showModal && (
        <Modal width="670px" height="500px" setShowModal={setShowModal}>
          <ModalCardBox />
        </Modal>
      )}
    </>
  );
};

export default PostCardItem;
