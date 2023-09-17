import * as S from './ChatList.style';

const ListCard = (props) => {
  const data = props.data;
  return (
    <S.ChatListCardWrap>
      <S.ChatListCard onClick={() => props.handler(data)}>
        <S.ProfileImg src={data.profileImg}></S.ProfileImg>
        <S.ListMsgBox>
          <S.PartnerName>{data.partnerName}</S.PartnerName>
          <S.lastMsg>{props.lastChat}</S.lastMsg>
        </S.ListMsgBox>
      </S.ChatListCard>
    </S.ChatListCardWrap>
  );
};

export default ListCard;
