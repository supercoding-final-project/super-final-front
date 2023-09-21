import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'src/components/common/Modal';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './Detail.style';
import PostApplicationModal from './PostApplicationModal';

const PostModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { jwtToken } = useJwtToken();

  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  const createChatHandler = () => {
    axios.post(
      'https://codevelop.store/api/v1/createchat',
      {
        anotherUserId: props.mentorId,
      },
      {
        headers: {
          Authorization: jwtToken,
        },
      },
    );
  };

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
            <button onClick={createChatHandler}>문의하기</button>
          </Link>
        </div>
      </S.ModalBtn>
      {showModal && (
        <Modal width="710px" height="617px" setShowModal={setShowModal}>
          <PostApplicationModal
            setShowModal={setShowModal}
            price={props.price}
            title={props.title}
            mentorId={props.mentorId}
          />
        </Modal>
      )}
    </S.PostModal>
  );
};

export default PostModal;
