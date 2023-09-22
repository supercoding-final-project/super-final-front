import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/common/Button';
import { Icon } from 'src/components/common/icon/Icon';
import Modal from 'src/components/common/Modal';
import MentoDetail from 'src/components/detail/mento/MentoDetail';
import { theme } from 'src/globalLayout/GlobalStyle';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './MainCardItem.style';

const MentoCardItem = (props) => {
  const item = props.data;
  const { jwtToken } = useJwtToken();
  const navigate = useNavigate();

  // 모달이 열리는 위치에 필요한 코드 1/3
  const [showModal, setShowModal] = useState(false);
  // 모달이 열리는 위치에 필요한 코드 2/3
  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  const createChatHandler = async () => {
    await axios.post(
      'https://codevelop.store/api/v1/createchat',
      {
        mentorId: item.mentorId,
      },
      {
        headers: {
          Authorization: jwtToken,
        },
      },
    );
    navigate('/chatroom');
  };

  return (
    <>
      <S.MainCardItem>
        <h4>{item.introduction}</h4>
        <S.StackBox>
          <div className="stack">
            <p className="title">직무</p>
            <p className="desc">{item.currentDuty}</p>
          </div>
          <div className="stack">
            <p className="title">경력</p>
            <p className="desc">{item.currentPeriod}</p>
          </div>
          <div className="stack bold">
            <p className="title">현직</p>
            <p className="desc">{item.company}</p>
          </div>
        </S.StackBox>
        <S.NickNameBox>
          <div className="stack">
            <p className="title">{item.nickname}</p>
            <p className="desc bold">
              <Icon name="Star" /> <span>{item.star}</span>
            </p>
          </div>
        </S.NickNameBox>
        <hr />
        <S.MainCardButtonBox>
          <Button
            text={'문의하기'}
            bgcolor={theme.color.point}
            fontcolor={theme.color.bgc1}
            onClick={createChatHandler}
          />
          <Button
            text={'상세보기'}
            bgcolor={theme.color.point}
            fontcolor={theme.color.bgc1}
            onClick={handleModalOpen}
          />
        </S.MainCardButtonBox>
      </S.MainCardItem>
      {showModal && (
        <Modal setShowModal={setShowModal} width="70rem" height="55rem">
          <MentoDetail mentorId={item.mentorId} />
        </Modal>
      )}
    </>
  );
};

export default MentoCardItem;
