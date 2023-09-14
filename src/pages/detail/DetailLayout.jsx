import MentoProfile from 'src/components/detail/MentoProfile';
import DetailModal from 'src/components/detail/post/DetailModal';

import * as S from './DetailLayout.style';

const DetailLayout = () => {
  const mock = ['url1', 'url2', 'url3'];

  return (
    <S.DetailWrap>
      <DetailModal />
      <div>
        <MentoProfile />
        <S.TitleBox>
          <span>초급</span>
          <h2>[프론트엔드] 잘라먹는Typescript!</h2>
        </S.TitleBox>
        <S.StackBox>
          <div>기술스택</div>
          <div>
            {mock.map((stack, i) => (
              <S.StackImg key={i} src={stack} />
            ))}
          </div>
        </S.StackBox>
        <S.IntroTitle>소개</S.IntroTitle>
        <S.Intro>
          <ol>
            <span>업무 경력</span>
            <li>
              <span>&bull;</span>
              카카오 뱅크 프론트엔드 2년 3개월
            </li>
            <li>
              <span>&bull;</span>
              오스템인플란트 백엔드 1년 7개월
            </li>
          </ol>
        </S.Intro>
        <S.Intro>
          <ol>
            <span>강의 경력</span>
            <li>
              <span>&bull;</span>
              카카오테크캠퍼스 출강 (포트폴리오, 기술면접)
            </li>
            <li>
              <span>&bull;</span>
              패스트캠퍼스 프론트엔드 부트캠프 5기 커리어 특강
            </li>
            <li>
              <span>&bull;</span>
              야놀자 Tech School 이력서/포트폴리오 강의, 커리어 멘토링
            </li>
          </ol>
        </S.Intro>
        <S.IntroTitle>코드리뷰는 방식으로 진행돼요</S.IntroTitle>
        <S.Intro>
          <ol>
            <li>
              <span>&bull;</span>
              저는 멘티의 개선점을 위주로 봐줘요.
            </li>
            <li>
              <span>&bull;</span>
              대부분의 리뷰는 화면 공유를 통해 이루어져요.
            </li>
          </ol>
        </S.Intro>
        <S.ReviewList>
          <S.ReviewTitle>멘티의 한 줄 리뷰</S.ReviewTitle>
          <S.ReviewBox>
            <S.ReviewCard>
              <S.Name>미쿠</S.Name>
              <S.Text>내용</S.Text>
              <S.Rating>별점</S.Rating>
            </S.ReviewCard>
            <S.ReviewCard>
              <S.Name>김지우</S.Name>
              <S.Text>내용</S.Text>
              <S.Rating>별점</S.Rating>
            </S.ReviewCard>
            <S.ReviewCard>
              <S.Name>하방방</S.Name>
              <S.Text>내용</S.Text>
              <S.Rating>별점</S.Rating>
            </S.ReviewCard>
            <S.ReviewCard>
              <S.Name>하방방</S.Name>
              <S.Text>내용</S.Text>
              <S.Rating>별점</S.Rating>
            </S.ReviewCard>
            <S.ReviewCard>
              <S.Name>하방방</S.Name>
              <S.Text>내용</S.Text>
              <S.Rating>별점</S.Rating>
            </S.ReviewCard>
            <S.ReviewCard>
              <S.Name>하방방</S.Name>
              <S.Text>내용</S.Text>
              <S.Rating>별점</S.Rating>
            </S.ReviewCard>
          </S.ReviewBox>
        </S.ReviewList>
        <S.ReviewPost>
          <span>리뷰 작성하기</span>
          <div>
            <S.Name>멘티 닉네임</S.Name>
            <S.Text>
              <input placeholder="한줄 리뷰를 입력해주세요." />
            </S.Text>
            <S.Rating>별저엄</S.Rating>
          </div>
          <button>리뷰 등록</button>
        </S.ReviewPost>
      </div>
    </S.DetailWrap>
  );
};

export default DetailLayout;
