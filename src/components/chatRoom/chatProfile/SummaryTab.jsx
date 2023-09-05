import * as S from './profile.style';

const SummaryTab = (props) => {
  const data = props.tab;
  return (
    <S.ProfileSummaryTab>
      <S.SummaryTab>
        <S.TabWrap>
          <div>
            <S.TabDetail>멘티 수</S.TabDetail>
            <S.TabDetail>{data.mentiMount}명</S.TabDetail>
          </div>
        </S.TabWrap>
        <S.TabWrap>
          <div>
            <S.TabDetail>평점</S.TabDetail>
            <S.TabDetail>{data.rating}점</S.TabDetail>
          </div>
        </S.TabWrap>
        <S.TabWrap>
          <div>
            <S.TabDetail>개발 경력</S.TabDetail>
            <S.TabDetail>{data.career}년</S.TabDetail>
          </div>
        </S.TabWrap>
      </S.SummaryTab>
    </S.ProfileSummaryTab>
  );
};

export default SummaryTab;
