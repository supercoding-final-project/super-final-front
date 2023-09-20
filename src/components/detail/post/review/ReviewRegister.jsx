import axios from 'axios';
import { useState } from 'react';
import { Icon } from 'src/components/common/icon/Icon';
import useJwtToken from 'src/hooks/useJwt';
import * as S from 'src/pages/detail/DetailLayout.style';

const ReviewRegister = (props) => {
  const { jwtToken } = useJwtToken();
  const [review, setReview] = useState({
    orderSheetId: props.orderSheetId,
    content: '',
    star: 5,
  });

  const postReview = async () => {
    const res = await axios.post('https://codevelop.store/api/v1/reviews', review, {
      headers: {
        Authorization: jwtToken,
      },
    });
    props.setShowModal(false);
    document.body.style.overflowY = 'auto';
    props.onReviewChange();
    window.alert(res.data.message);
  };

  const contentHandler = (e) => {
    e.stopPropagation();
    setReview((prevData) => ({
      ...prevData,
      content: e.target.value,
    }));
  };

  const handleStarClick = (starValue) => {
    const updatedStar = starValue === review.star ? starValue - 1 : starValue;
    setReview((prevData) => ({
      ...prevData,
      star: updatedStar,
    }));
  };

  return (
    <S.ReviewPost>
      <S.ReviewPostHeader>
        <span>{props.title}</span>
        <div>
          {[1, 2, 3, 4, 5].map((starValue) => (
            <Icon
              key={starValue}
              name="Star"
              onClick={() => handleStarClick(starValue)} // 별 클릭 시 변경 로직 적용
              style={{
                color: starValue <= review.star ? 'green' : 'transparent', // 투명과 초록색으로 변경
                cursor: 'pointer',
                border: `1px solid ${starValue <= review.star ? 'green' : 'transparent'}`, // 테두리 스타일을 초록색으로 설정
              }}
            />
          ))}
        </div>
      </S.ReviewPostHeader>
      <S.Text>
        <textarea placeholder="한줄 리뷰를 입력해주세요." onChange={contentHandler} />
      </S.Text>
      <button onClick={postReview}>리뷰 등록</button>
    </S.ReviewPost>
  );
};

export default ReviewRegister;
