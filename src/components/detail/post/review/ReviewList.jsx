import * as S from './Review.style';

const ReviewList = (props) => {
  const info = props.info;
  return (
    <S.ListBox>
      <div>{info.mento}</div>
      <div style={{ width: '40%' }}>{info.post}</div>
      {props.type === 'POST' ? (
        <div>{info.time}시간</div>
      ) : (
        <div style={{ justifyContent: 'flex-start' }}> {info.reviewContent}</div>
      )}
      {props.type === 'POST' ? <div>{info.point.toLocaleString()}P</div> : <div>{info.rating}</div>}

      <div>
        <button>{props.btnValue}</button>
      </div>
    </S.ListBox>
  );
};

export default ReviewList;
