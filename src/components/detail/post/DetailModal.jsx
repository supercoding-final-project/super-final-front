import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useRecoilState } from 'recoil';
import Modal from 'src/components/common/Modal';
import useJwtToken from 'src/hooks/useJwt';

// import { postRequestAtom } from 'src/store/post/postRequestAtom';
import * as S from './Detail.style';
import PostApplicationModal from './PostApplicationModal';

const PostModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { jwtToken } = useJwtToken();
  const navigate = useNavigate();
  // const [requestData, setRequestData] = useRecoilState(postRequestAtom);

  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  const createChatHandler = async () => {
    await axios.post(
      'https://codevelop.store/api/v1/createchat',
      {
        mentorId: props.mentorId,
      },
      {
        headers: {
          Authorization: jwtToken,
        },
      },
    );
    navigate('/chatroom');
  };

  const handleDelete = async () => {
    await axios.delete(`https://codevelop.store/api/v1/post/${props.postId}`, {
      headers: {
        Authorization: jwtToken,
      },
    });
    window.alert('포스트가 삭제되었습니다.');
    navigate('/');
  };

  // const handlePatch = async () => {
  //   await axios.patch(`https://codevelop.store/api/v1/post/${props.postId}`, requestData, {
  //     headers: {
  //       Authorization: jwtToken,
  //     },
  //   });
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
      {props.permission ? (
        <S.ModalBtn>
          <div>
            <button>수정하기</button>
          </div>
          <div>
            <button onClick={handleDelete}>삭제하기</button>
          </div>
        </S.ModalBtn>
      ) : (
        <S.ModalBtn>
          <div>
            <button onClick={handleModalOpen}>신청하기</button>
          </div>
          <div>
            <button onClick={createChatHandler}>문의하기</button>
          </div>
        </S.ModalBtn>
      )}

      {showModal && (
        <Modal width="710px" height="617px" setShowModal={setShowModal}>
          <PostApplicationModal
            setShowModal={setShowModal}
            price={props.price}
            title={props.title}
            mentoId={props.mentorId}
          />
        </Modal>
      )}
    </S.PostModal>
  );
};

export default PostModal;
