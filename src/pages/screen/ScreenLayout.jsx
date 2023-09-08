import * as S from './screen.style';

const ScreenLayout = () => {
  return (
    <S.ScreenWrap>
      <div className="screenBox">
        <div className="screen"></div>
        <div className="option">
          <div className="option-mute option-item">음</div>
          <div className="option-camera option-item">카</div>
          <div className="option-share option-item">공</div>
          <div className="option-close option-item">나가기</div>
        </div>
      </div>
      <div className="chat">채팅</div>
    </S.ScreenWrap>
  );
};

export default ScreenLayout;
