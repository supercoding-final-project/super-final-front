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

  const postReview = () => {
    axios.post('https://codevelop.store/api/v1/reviews', review, {
      headers: {
        Authorization: jwtToken,
      },
    });
    props.setShowModal(false);
    document.body.style.overflowY = 'auto';
    props.onReviewChange();
  };

  const contentHandler = (e) => {
    setReview((prevData) => ({
      ...prevData,
      content: e.target.value,
    }));
  };

  const starHandler = (selectedStar) => {
    setReview((prevData) => ({
      ...prevData,
      star: selectedStar,
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
              onClick={() => starHandler(starValue)} // 클릭 시 별점 설정
              style={{
                color: starValue <= review.star ? 'yellow' : 'gray', // 선택된 별까지 색깔 변경
                cursor: 'pointer',
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
