import Button from '@/components/common/Button';
import Header from '@/components/header/Header';
import * as S from './Main.style.jsx';
import MainCard from './MainCard';
import banner_main from '../../assets/banner_main.png';

const MainLayout = () => {
  // const date = new Date('2023', '08', '31', '20'); // 에포크 밀리(에포크 밀리초 단위로 하는 거라 명시적으로 에포크 밀리라고 함)
  // const date = new Date();
  // console.log('getTime', date.getTime());
  // console.log('getTime', date.getTime().parseInt('0xfff', 16));

  return (
    <>
      {/* <Button text={'text 입니다.'} bgcolor={'#1A6DFF'} fontcolor={'white'} />
      <Button text={'purpose가 test일 때'} purpose="test" />
      <Button text={'purpose가 test2일 때'} fontcolor={'skyblue'} purpose="test2" />
      <Header /> */}
      <S.MainWrap>
        <S.MainBanner>
          <div className="banner_container">
            <div>
              <p className="title">하반기 개발자 공채,</p>
              <p className="title">코드리뷰 속에 답이 있다!</p>
              <p className="title_sub">고민 끝! 합격을 부르는 핵심 기술 라인업</p>
            </div>
            <div>
              <img src={banner_main} alt="banner image" />
            </div>
          </div>
        </S.MainBanner>
        <S.MainCards>
          <article>
            <div>
              <h3>인기 멘토</h3>
              <p className="more">더보기</p>
            </div>
            <ul>
              <MainCard />
              <MainCard />
              <MainCard />
              <MainCard />
              <MainCard />
              <MainCard />
              <MainCard />
              <MainCard />
            </ul>
          </article>
        </S.MainCards>
        <S.MainCards>
          <article>
            <div>
              <h3>BEST 코드리뷰</h3>
              <p className="more">더보기</p>
            </div>
            <ul>
              <MainCard />
            </ul>
          </article>
        </S.MainCards>
        <S.MainCards>
          <article>
            <div>
              <h3>HOT 10 기술스택</h3>
              <p className="more">더보기</p>
            </div>
            <ul>
              <MainCard />
            </ul>
          </article>
        </S.MainCards>
      </S.MainWrap>
    </>
  );
};

export default MainLayout;
