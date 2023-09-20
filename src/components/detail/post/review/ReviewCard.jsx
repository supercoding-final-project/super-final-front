import { Icon } from 'src/components/common/icon/Icon';
import * as S from 'src/pages/detail/DetailLayout.style';

const ReviewCard = (props) => {
  return (
    <S.ReviewCardWrap>
      <S.Name>{props.data.nickname}</S.Name>
      <S.Text>{props.data.content}</S.Text>
      <S.Rating>
        <Icon name="Star" color="white" />
        {props.data.star}
      </S.Rating>
      {/* 회차 정보 입력 */}
    </S.ReviewCardWrap>
  );
};

export default ReviewCard;
