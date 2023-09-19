import { Icon } from 'src/components/common/icon/Icon';
import * as S from 'src/pages/detail/DetailLayout.style';

const ReviewRegister = (props) => {
  return (
    <S.ReviewPost>
      <S.ReviewPostHeader>
        <span>{props.title}</span>
        <div>
          <Icon name="Star" />
          <Icon name="Star" />
          <Icon name="Star" />
          <Icon name="Star" />
          <Icon name="Star" />
        </div>
      </S.ReviewPostHeader>
      <S.Text>
        <textarea placeholder="한줄 리뷰를 입력해주세요." />
      </S.Text>
      <button>리뷰 등록</button>
    </S.ReviewPost>
  );
};

export default ReviewRegister;
