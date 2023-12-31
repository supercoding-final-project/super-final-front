import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './chatbox/chatBox.style';
import { Icon } from '../common/icon/Icon';
import Modal from '../common/Modal';
import ModalPortal from '../modal/ModalPortal';
import PostBox from '../post/PostBox';

const NoChat = (props) => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(true);
  };
  return (
    <>
      {props.isMento ? (
        <S.NoChatListWrap>
          {showModal && (
            <ModalPortal>
              <Modal setShowModal={setShowModal}>
                <PostBox />
              </Modal>
            </ModalPortal>
          )}
          <div>
            <S.NoChatListBox>
              <Icon name="SmileEmoji" />
            </S.NoChatListBox>
            <S.NoChatListBox>
              <S.TextSpan color="#29cc61">멘티</S.TextSpan>
              <S.TextSpan>의 신청</S.TextSpan>이
            </S.NoChatListBox>
            <S.NoChatListBox>
              <span>이루어져야 해요!</span>
            </S.NoChatListBox>
            <S.NoChatListDetail>
              <S.TextSpan>멘티의 신청을 </S.TextSpan>&nbsp;위해
            </S.NoChatListDetail>
            <S.NoChatListDetail>
              <S.TextSpan color="#29cc61">POST</S.TextSpan>
              <S.TextSpan>&nbsp;작성,&nbsp;</S.TextSpan>
              <S.TextSpan color="#29cc61">멘토 프로필</S.TextSpan>
              <S.TextSpan>을</S.TextSpan>
            </S.NoChatListDetail>
            <S.NoChatListDetail>완셩시켜볼까요?</S.NoChatListDetail>
            <S.NoChatListDetail>
              <S.NoChatBtn onClick={modalHandler}>POST 작성</S.NoChatBtn>
              <Link to="/my/mento">
                <S.NoChatBtn>마이페이지</S.NoChatBtn>
              </Link>
            </S.NoChatListDetail>
          </div>
        </S.NoChatListWrap>
      ) : (
        <S.NoChatListWrap>
          <div>
            <S.NoChatListBox>채팅목록이 없습니다.</S.NoChatListBox>
            <S.NoChatListBox>우어 나는 멘티다</S.NoChatListBox>
          </div>
        </S.NoChatListWrap>
      )}
    </>
  );
};

export default NoChat;
