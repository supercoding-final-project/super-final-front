import * as S from 'src/pages/detail/DetailLayout.style';
const DetailIntro = (props) => {
  return (
    <S.Intro>
      <ol>
        {props.olName && <span>{props.olName}</span>}
        {props.text.map((text, i) => (
          <li key={i}>
            <span>&bull;</span>
            {text}
          </li>
        ))}
      </ol>
    </S.Intro>
  );
};

export default DetailIntro;
