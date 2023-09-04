import * as S from './profile.style';

const SummaryTab = () => {
  return (
    <S.ProfileSummaryTab>
      <S.SummaryTab>
        <S.TabWrap>
          <div>
            <S.TabDetail>멘티 수</S.TabDetail>
            <S.TabDetail>43명</S.TabDetail>
          </div>
        </S.TabWrap>
        <S.TabWrap>
          <div>
            <S.TabDetail>평점</S.TabDetail>
            <S.TabDetail>4.3</S.TabDetail>
          </div>
        </S.TabWrap>
        <S.TabWrap>
          <div>
            <S.TabDetail>개발 경력</S.TabDetail>
            <S.TabDetail>10년</S.TabDetail>
          </div>
        </S.TabWrap>
      </S.SummaryTab>
    </S.ProfileSummaryTab>
  );
};

export default SummaryTab;
