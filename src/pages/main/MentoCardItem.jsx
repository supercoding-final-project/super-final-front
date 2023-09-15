import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/common/Button';
import { Icon } from 'src/components/common/icon/Icon';
import Modal from 'src/components/common/Modal';
import ModalCardBox from 'src/components/common/ModalCardBox';
import MentoDetail from 'src/components/detail/mento/MentoDetail';
import ModalPortal from 'src/components/modal/ModalPortal';
import { theme } from 'src/globalLayout/GlobalStyle';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './MainCardItem.style';

const MentoCardItem = () => {
  const [jwtToken, decodedToken] = useJwtToken();
  // 모달이 열리는 위치에 필요한 코드 1/3
  const [showModal, setShowModal] = useState(false);
  // 모달이 열리는 위치에 필요한 코드 2/3
  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  const createChatHandler = () => {
    axios.post('https://codevelop.store/api/v1/createroom', {
      user1Idx: decodedToken.sub,
      user2Idx: 5,
    });
  };

  return (
    <>
      <S.MainCardItem>
        <h4>멘토 입니다. 가로 넓이 280기준.</h4>
        <S.StackBox>
          <div className="stack">
            <p className="title">직무</p>
            <p className="desc">프론트엔드</p>
          </div>
          <div className="stack">
            <p className="title">경력</p>
            <p className="desc">미들</p>
          </div>
          <div className="stack bold">
            <p className="title">현직</p>
            <p className="desc">외국 금융권</p>
          </div>
        </S.StackBox>
        <S.NickNameBox>
          <div className="stack">
            <p className="title">닉네임</p>
            <p className="desc bold">
              <Icon name="Star" /> <span>5.0</span>
            </p>
          </div>
        </S.NickNameBox>
        <hr />
        <S.MainCardButtonBox>
          <Link to="/chatroom">
            <Button
              text={'문의하기'}
              bgcolor={theme.color.point}
              fontcolor={theme.color.bgc1}
              onClick={createChatHandler}
            />
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
        <Modal setShowModal={setShowModal}>
          <MentoDetail />
        </Modal>
      )}
    </>
  );
};

export default MentoCardItem;
