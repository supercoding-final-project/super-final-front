import { Link } from 'react-router-dom';
import Button from 'src/components/common/Button';
import { theme } from 'src/globalLayout/GlobalStyle';

import * as S from './MainCardItem.style';

const PostCardItem = () => {
  return (
    <>
      <S.MainCardItem>
        <h4>POST 입니다. 가로 넓이 280기준.</h4>
        <S.StackBox>
          <div className="stack">
            <p className="title">직무</p>
            <p className="desc">BACKEND</p>
          </div>
          <div className="stack">
            <p className="title">스택</p>
            <p className="desc limit">#JAVA #SPRING #SPRING #SPRING #SPRING #SPRING</p>
          </div>
          <div className="stack bold">
            <p className="title">가격</p>
            <p className="desc">99,000P</p>
          </div>
        </S.StackBox>
        <S.NickNameBox>
          <div className="stack">
            <p className="title">닉네임</p>
            <p className="desc bold">입문,초급,중급(택1)</p>
          </div>
        </S.NickNameBox>
        <hr />
        <S.MainCardButtonBox>
          <Link to="/chatroom">
            <Button text={'문의하기'} bgcolor={theme.color.point} fontcolor={theme.color.bgc1} />
          </Link>
          {/* <Link to=`/detail/${postId}`> */}
          <Link to="/detail">
            <Button text={'상세보기'} bgcolor={theme.color.point} fontcolor={theme.color.bgc1} />
          </Link>
        </S.MainCardButtonBox>
      </S.MainCardItem>
    </>
  );
};

export default PostCardItem;
