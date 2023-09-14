import Button from 'src/components/common/Button.jsx';
import { Icon } from 'src/components/common/icon/Icon.jsx';
import { theme } from 'src/globalLayout/GlobalStyle.js';
import * as S from './Main.style.jsx';
import PostCardItem from './PostCardItem.jsx';
import MentoCardItem from './MentoCardItem.jsx';
import { Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <S.MainWrapper>
        <Link to="/auth">
          <S.StartCodeReviewBox>
            <Button
              text={'코드 리뷰 시작하기!'}
              bgcolor={theme.color.point}
              fontcolor={theme.color.bgc1}
            />
          </S.StartCodeReviewBox>
        </Link>
        <S.MainSearchContainer>
          <S.MainSearchList>
            <S.MainSearchItem className="active">멘토</S.MainSearchItem>
            <S.MainSearchItem>POST</S.MainSearchItem>
          </S.MainSearchList>
          <S.MainSearchBox>
            <form>
              <Icon name="Search" />
              <label>
                <input type="text" />
              </label>
              <button>검색</button>
            </form>
          </S.MainSearchBox>
          <S.BestTechStackBox>
            <h3>BEST10 기술 스택</h3>
            <S.BestTechStackList>
              <S.BestTechStackItem>
                <div></div>
                <span>Swift</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>JavaScript</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>Vue</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>Nextjs</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>Nodejs</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>Flutter</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>Kotlin</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>React</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>MSSQL</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>jQuery</span>
              </S.BestTechStackItem>
            </S.BestTechStackList>
          </S.BestTechStackBox>
        </S.MainSearchContainer>
        <S.MainCardsContainer>
          <article>
            <div>
              <h3>
                <span>HOT</span> 멘토!
              </h3>
              <p className="more">모든 멘토 보러가기 &gt;</p>
            </div>
            <ul>
              <MentoCardItem />
              <MentoCardItem />
              <MentoCardItem />
              <MentoCardItem />
            </ul>
          </article>
          <article>
            <div>
              <h3>
                <span>HOT</span> POST!
              </h3>
              <p className="more">모든 POST 보러가기 &gt;</p>
            </div>
            <ul>
              <PostCardItem />
              <PostCardItem />
              <PostCardItem />
              <PostCardItem />
            </ul>
          </article>
        </S.MainCardsContainer>
      </S.MainWrapper>
    </>
  );
};

export default MainLayout;
