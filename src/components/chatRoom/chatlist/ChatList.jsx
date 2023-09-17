import * as S from './ChatList.style';
import ListCard from './ListCard';

const ChatList = (props) => {
  return (
    <S.ChatListWrap>
      <S.ChatListBox>
        {props.list.map((data, index) => (
          <ListCard
            key={index}
            data={data}
            handler={props.handleChatSelect}
            lastChat={props.lastChat}
          />
        ))}
      </S.ChatListBox>
    </S.ChatListWrap>
  );
};

export default ChatList;
