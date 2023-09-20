import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Button from 'src/components/common/Button';
import { postApplicationStepSelector } from 'src/store/post/postApplicationAtom';

const ButtonBox = ({ setShowModal }) => {
  const step = useRecoilValue(postApplicationStepSelector);
  const setStep = useSetRecoilState(postApplicationStepSelector);
  const navigate = useNavigate();

  const clickStep = (state) => {
    if (step === '신청하기' && state === '이전으로') {
      navigate('/detail');
      setShowModal(false);
    } else if (step === '신청하기' && state === '다음으로') {
      setStep('정보확인&결제');
    } else if (step === '정보확인&결제' && state === '이전으로') {
      setStep('신청하기');
    } else if (step === '정보확인&결제' && state === '결제하기') {
      alert('결제완료!');
      setShowModal(false);
      navigate('/detail'); // 결제로직
    }
  };
  return (
    <div className="btn-box">
      <Button
        text="이전으로"
        fontcolor="#807E7D"
        bgcolor="#EDFCF3"
        radius="4px"
        fontSize="20px"
        fontWeight={700}
        onClick={() => clickStep('이전으로')}
      />
      <Button
        text={`${step === '정보확인&결제' ? '결제하기' : '다음으로'}`}
        fontcolor="#FCFCFB"
        bgcolor="#29CC61"
        radius="4px"
        fontSize="20px"
        fontWeight={700}
        onClick={() => clickStep(`${step === '정보확인&결제' ? '결제하기' : '다음으로'}`)}
      />
    </div>
  );
};

export default ButtonBox;
