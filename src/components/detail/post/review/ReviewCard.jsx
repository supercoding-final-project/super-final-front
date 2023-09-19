import { Icon } from 'src/components/common/icon/Icon';
import * as S from 'src/pages/detail/DetailLayout.style';

const ReviewCard = (props) => {
  return (
    <S.ReviewCardWrap>
      <S.Name>{props.data.name}</S.Name>
      <S.Text>{props.data.review}</S.Text>
      <S.Rating>
        <Icon name="Star" color="white" />
        {props.data.rating}
      </S.Rating>
    </S.ReviewCardWrap>
  );
};

export default ReviewCard;
