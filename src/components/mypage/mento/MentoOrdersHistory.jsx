import axios from 'axios';
import { useEffect } from 'react';
import { useHttp } from 'src/api/useHttp';

import * as S from './MentoOrdersHistory.style';
const MentoordersHistory = () => {
  const userId = 6;

  const prams = { userId: userId };
  useEffect(() => {
    // const data = useHttp("/mentee/mypage/orders", prams)
    // console.log(data)
  }, []);

  let orderlist = [
    {
      orderId: 9,
      postTitle: 'Java Programming',
      menteeNickname: 'User5Nick',
      totalPrice: 500,
      isCompleted: false,
    },
    {
      orderId: 9,
      postTitle: 'Java Programming',
      menteeNickname: 'User5Nick',
      totalPrice: 500,
      isCompleted: false,
    },
    {
      orderId: 9,
      postTitle: 'Java Programming',
      menteeNickname: 'User5Nick',
      totalPrice: 500,
      isCompleted: false,
    },
  ];

  // const url = 'http://localhost:8080/api/v1/mypage/orders';
  // const userId = 6;

  // axios.get(url, {
  //     params: {
  //         userId: userId
  //     }
  // })
  //     .then(response => {
  //         // 요청이 성공한 경우 처리할 코드
  //         console.log('응답 데이터:', response.data);
  //     })
  //     .catch(error => {
  //         // 요청이 실패한 경우 처리할 코드
  //         console.error('에러:', error);
  //     });

  return (
    <>
      <S.OrderHistoryContainer>
        <S.orderHistoryHead>
          <div>멘토님네임</div>
          <div>포스트이름</div>
          <div>가격</div>
          <div>주문 승인</div>
        </S.orderHistoryHead>

        {orderlist.map((data, index) => {
          return (
            <S.DivGrid key={index}>
              <div>{data.menteeNickname}</div>
              <div>{data.postTitle}</div>
              <div>{data.totalPrice}</div>
              {!data.isCompleted ? <div>⭕️</div> : <div>❌</div>}
            </S.DivGrid>
          );
        })}
      </S.OrderHistoryContainer>
    </>
  );
};

export default MentoordersHistory;
