// import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import * as S from './main.style';

const MentoMainLayout = () => {
  // const navigate = useNavigate();

  const articleData = [
    {
      step: '01',
      subTitle: '멘토링할 기술스택을 선택해주세요.',
      description: '여러개 선택해서 본인을 뽐내보세요.',
      img: '',
    },
    {
      step: '02',
      subTitle: '멘토님의 경력을 등록해주세요.',
      description: '상세하게 경력을 적어주실 수록 멘티들의 신뢰도가 올라가요.',
      img: '',
    },
    {
      step: '03',
      subTitle: '가능한 날짜를 선택해주세요.',
      description: '가능한 날짜와 시간대를 고를 수 있어요.',
      img: '',
    },
    {
      step: '04',
      subTitle: '멘티와 실시간으로 소통하세요.',
      description: '채팅으로 멘티와 간단하게 이야기 하실 수 있어요.',
      img: '',
    },
    {
      step: '05',
      subTitle: '얼굴을 보고 이야기 해보세요.',
      description: '화상회의로 대면처럼 소통 할 수 있어요.',
      img: '',
    },
    {
      step: '06',
      subTitle: '화면 공유로 코드리뷰를 해보세요.',
      description: '코드들을 화면을 통해 확인할 수 있어요.',
      img: '',
    },
  ];

  const directSignUpMento = () => {
    // navigate('/signUp')
    console.log('회원가입 페이지로');
  };

  const fromLeft = {
    offscreen: {
      x: 300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  const fromRight = {
    offscreen: {
      x: -400,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1,
      },
    },
  };
  const articleRender = () => {
    return articleData.map((el, index) => {
      if (index % 2 === 0) {
        return (
          <motion.article key={index} initial="offscreen" whileInView="onscreen">
            <motion.div className="step-box" variants={fromLeft}>
              <div className="step-box_text">
                <div className="step">{el.step}</div>
                <div className="sub-title">{el.subTitle}</div>
                <span>{el.description}</span>
              </div>
              <div className="step-box_img">
                <div className="img-card"></div>
              </div>
            </motion.div>
          </motion.article>
        );
      } else {
        return (
          <motion.article key={index} initial="offscreen" whileInView="onscreen">
            <motion.div className="step-box" variants={fromRight}>
              <div className="step-box_img">
                <div className="img-card"></div>
              </div>
              <div className="step-box_text">
                <div className="step">{el.step}</div>
                <div className="sub-title">{el.subTitle}</div>
                <span>{el.description}</span>
              </div>
            </motion.div>
          </motion.article>
        );
      }
    });
  };

  // const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <S.MentoMainWrap>
      <section className="banner">
        <div className="text-box">
          <p>최고의 멘토가 되어</p>
          <p>수익을 만들어보세요!</p>
          <button onClick={directSignUpMento}>멘토로 로그인하러 가기</button>
        </div>
      </section>

      <section className="guide">
        <div className="title">코드밸롭 가이드 라인</div>
        {articleRender()}
      </section>

      <section className="statistics">
        <p>많은 멘티들이 당신을 기다립니다.</p>
        <ul>
          <li>
            <div className="total">24,280,796</div>
            <div className="title">누적 요청서</div>
          </li>
          <li>
            <div className="total">1,475,589</div>
            <div className="title">등록된 고수</div>
          </li>
          <li>
            <div className="total">4.9 / 5점</div>
            <div className="title">평균 리뷰별점</div>
          </li>
        </ul>
      </section>
    </S.MentoMainWrap>
  );
};

export default MentoMainLayout;
