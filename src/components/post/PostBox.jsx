import PostInputBox from './input/PostInputBox';
import PostModal from './modal/PostModal';
import * as S from './PostBox.style';
import PostLevel from './PostLevel';
import PostTitle from './PostTitle';
import StackBox from './StackBox';
import { Icon } from '../common/icon/Icon';

const PostBox = () => {
  return (
    <S.PostWrap>
      <PostModal recoilKey="price" />
      <S.PostContainer>
        <PostTitle recoilKey="title" />
        <PostLevel recoilKey="level" />
        <StackBox recoilKey="postStack" />
        <S.InputTitle>
          <Icon name="Review" />
          소개
        </S.InputTitle>
        <PostInputBox ol="업무 경력" recoilKey="workCareer" />
        <PostInputBox ol="강의 경력" recoilKey="educateCareer" />
        <S.InputTitle>
          <Icon name="Rose" />
          본인의 코드리뷰 스타일을 적어주세요
        </S.InputTitle>
        <PostInputBox recoilKey="reviewStyle" />
      </S.PostContainer>
    </S.PostWrap>
  );
};

export default PostBox;
