import { useState } from 'react';
import Modal from 'src/components/common/Modal';

import * as S from './Detail.style';
import PostApplicationModal from './PostApplicationModal';

const PostModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  // const postHandler = () => {
  //   console.log('눌림');
  // };

  return (
    <S.PostModal>
      <S.PostModalWrap>
        <S.PostModalContainer>
          <div>1:1 코드리뷰</div>
          <div>
            1시간/
            <span>{props.price && props.price.toLocaleString()}P</span>
          </div>
        </S.PostModalContainer>
      </S.PostModalWrap>
      <S.ModalBtn>
        <div>
          <button onClick={handleModalOpen}>신청하기</button>
        </div>
        <div>
          <Link to="/chatroom">
            <button>문의하기</button>
          </Link>
        </div>
      </S.ModalBtn>
      {showModal && (
        <Modal width="710px" height="617px" setShowModal={setShowModal}>
          <PostApplicationModal setShowModal={setShowModal} />
        </Modal>
      )}
    </S.PostModal>
  );
};

export default PostModal;
