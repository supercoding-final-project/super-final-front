import chat from '@/assets/chat.svg';

const NoChat = () => {
  return (
    <div className="not-have-box">
      <img src={chat} alt="chat svg" />
      <strong>채팅이 없습니다.</strong>
      <span>멘토님을 찾아 채팅을 시작해보세요!</span>
      <button>멘토님 찾기</button>
    </div>
  );
};

export default NoChat;
