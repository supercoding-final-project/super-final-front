// import React from 'react';
import { useState } from 'react';
import Modal from 'src/components/common/Modal';
import ModalMainCard from 'src/components/common/ModalMainCard';

import * as S from './Main.style';
import chevron_right from '../../assets/chevron_right.svg';
import profile from '../../assets/profile.svg';
import star from '../../assets/star.svg';

const MainCard = () => {
  // 모달이 열리는 위치에 필요한 코드 1/3
  const [showModal, setShowModal] = useState(false);
  // 모달이 열리는 위치에 필요한 코드 2/3
  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  return (
    <>
      <S.MainCard onClick={handleModalOpen}>
        <h4 className="cardtitle">[라이브 멘토링] UE5 & 게임 서버 연동 (기존 수강생 전용)</h4>
        <div className="stack">
          <span className="title">직무</span>
          <span className="desc">게임 클라이언트 개발자</span>
        </div>
        <div className="stack">
          <span className="title">경력</span>
          <span className="desc">미들 (4~8년)</span>
        </div>
        <div className="stack">
          <span className="title">현직</span>
          <span className="desc incumbent">NHN한국사이버결제</span>
        </div>
        <section>
          <img className="profile" src={profile} alt="profile" />
        </section>
        <hr />
        <div className="under_contents">
          <div className="nickname">요것조것개발</div>
          <S.StarTag>
            <div className="icon">
              <img className="star" src={star} alt="star" />
            </div>
            <div>5.0</div>
            <div className="icon">
              <img className="chevron_right" src={chevron_right} alt="arrow" />
            </div>
          </S.StarTag>
        </div>
      </S.MainCard>
      {/* 모달이 열리는 위치에 필요한 코드 3/3 - <Modal></Modal> 사이에는 클릭시 열릴 모달의 콘텐츠를 import */}
      {showModal && (
        <Modal width="670px" height="500px" setShowModal={setShowModal}>
          <ModalMainCard />
        </Modal>
      )}
    </>
  );
};

export default MainCard;
