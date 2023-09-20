import { Link } from 'react-router-dom';
import Button from 'src/components/common/Button';
import { theme } from 'src/globalLayout/GlobalStyle';

import * as S from './MainCardItem.style';
import { useEffect, useState } from 'react';
import { postData } from '../list/postData';

const PostCardItem = () => {
  const [postListData, setPostListData] = useState(postData);

  // 모달 카드의 가격의 뒤에서 세번째 위치에 콤마(,) 붙여주는 코드
  useEffect(() => {
    setPostListData((prevData) =>
      prevData.map((item) => ({
        ...item,
        price: item.price.toLocaleString(),
      })),
    );
  }, []);

  const handleScrollInnerModal = () => {
    document.body.style.overflowY = 'auto';
  };

  return (
    <>
      {postListData.map((item) => (
        <S.MainCardItem>
          <h4>{item.title}</h4>
          <S.StackBox>
            <div className="stack">
              <p className="title">직무</p>
              <p className="desc">BACKEND</p>
            </div>
            <div className="stack">
              <p className="title">스택</p>
              <p className="desc limit">#{item.postStack}</p>
            </div>
            <div className="stack bold">
              <p className="title">가격</p>
              <p className="desc">{item.price}P</p>
            </div>
          </S.StackBox>
          <S.NickNameBox>
            <div className="stack">
              <p className="title">{item.NICKNAME}</p>
              <p className="desc bold">{item.level}</p>
            </div>
          </S.NickNameBox>
          <hr />
          <S.MainCardButtonBox>
            <Link to="/chatroom">
              <Button text={'문의하기'} bgcolor={theme.color.point} fontcolor={theme.color.bgc1} />
            </Link>
            {/* <Link to=`/detail/${postId}`> */}
            <Link to="/detail">
              <Button
                onClick={handleScrollInnerModal}
                text={'상세보기'}
                bgcolor={theme.color.point}
                fontcolor={theme.color.bgc1}
              />
            </Link>
          </S.MainCardButtonBox>
        </S.MainCardItem>
      ))}
    </>
  );
};

export default PostCardItem;
