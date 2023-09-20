import * as S from './Review.style';
import ReviewList from './ReviewList';
const ReviewBox = (props) => {
  return (
    <S.ReviewBoxWrap>
      <h1>{props.title}</h1>
      <S.ReviewBox>
        <S.BoxHeader>
          <div>멘토</div>
          <div style={{ width: '40%' }}>POST</div>
          {props.headerOption.map((option, i) => (
            <div key={i}>{option}</div>
          ))}
        </S.BoxHeader>
        {props.data.map((info, i) => (
          <ReviewList
            key={i}
            info={info}
            btnValue={props.btnValue}
            type={props.type}
            onReviewChange={props.onReviewChange}
          />
        ))}
      </S.ReviewBox>
    </S.ReviewBoxWrap>
  );
};

export default ReviewBox;
