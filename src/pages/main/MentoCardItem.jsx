import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/common/Button';
import { Icon } from 'src/components/common/icon/Icon';
import Modal from 'src/components/common/Modal';
import MentoDetail from 'src/components/detail/mento/MentoDetail';
import { theme } from 'src/globalLayout/GlobalStyle';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './MainCardItem.style';

const MentoCardItem = () => {
  const { jwtToken, decodedToken } = useJwtToken();

  const [mentors, setMentors] = useState([]);

  // 모달이 열리는 위치에 필요한 코드 1/3
  const [showModal, setShowModal] = useState(false);
  // 모달이 열리는 위치에 필요한 코드 2/3
  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  const createChatHandler = () => {
    axios.post(
      'https://codevelop.store/api/v1/createchat',
      {
        anotherUserId: 5,
      },
      {
        headers: {
          Authorization: jwtToken,
        },
      },
    );
  };

  // useEffect(() => {
  //   // API 요청 로직 (Axios 등 사용)
  //   axios
  //     .get('https://codevelop.store/api/v1/mentors?pageSize=8')
  //     .then((response) => {
  //       // API 응답 데이터를 상태로 설정
  //       setMentors(response.data.data.content);
  //     })
  //     .catch((error) => {
  //       console.error('API 요청 에러:', error);
  //     });
  // }, []);

  return (
    <>
      {/* {mentors.map((item) => ( */}
      <S.MainCardItem key={item.mentorId}>
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
      {/* ))} */}
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
