import code from '@/assets/screen/code.svg';
import mikeMute from '@/assets/screen/micMute.svg';
import mikeOn from '@/assets/screen/micOn.svg';
import send from '@/assets/screen/send.svg';
import inputSend from '@/assets/screen/send-chat.svg';
import * as S from './screen.style';

const ScreenLayout = () => {
  return (
    <S.ScreenWrap>
      <div className="layout">
        <div className="screen">
          <div className="screen_video">
            <div className="mento face-screen">
              <div className="name">mento</div>
              <img className="mike" src={mikeOn} alt="" />
            </div>
            <div className="menti face-screen">
              <div className="name">menti</div>
              <img className="mike" src={mikeMute} alt="" />
            </div>
          </div>

          <div className="screen-option">
            <div className="screen-option_first option-box">
              <div className="mute option">음소거</div>
              <div className="screen-off option">비디오 중지</div>
            </div>
            <div className="screen-option_second option-box">
              <div className="participant option">참가자</div>
              <div className="chating option">채팅</div>
              <div className="share-screen option">화면공유</div>
            </div>
            <div className="screen-option_third option-box">
              <div className="off option">종료</div>
            </div>
          </div>
        </div>
      </div>

      <div className="chat">
        <div className="chat-header">
          <h2>채팅방</h2>
          <div className="close">X</div>
        </div>
        <ul>
          <li className="another">안녕하세요.</li>
          <li className="me">네. 안녕하세요. 공부 시작해볼까요?</li>
        </ul>

        <div className="send-box">
          <div className="input-box">
            <img src={inputSend} alt="" />
            <input type="text" placeholder="message" />
          </div>
          <img className="send-button" src={send}></img>
          <img className="code-button" src={code}></img>
        </div>
      </div>
    </S.ScreenWrap>
  );
};

export default ScreenLayout;
