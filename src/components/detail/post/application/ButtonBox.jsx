import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Button from 'src/components/common/Button';
import {
  postApplicationRequestAtom,
  postApplicationStepSelector,
} from 'src/store/post/postApplicationAtom';

const ButtonBox = ({ setShowModal, total }) => {
  const step = useRecoilValue(postApplicationStepSelector);
  const setStep = useSetRecoilState(postApplicationStepSelector);
  const navigate = useNavigate();
  const params = useParams();

  const data = useRecoilValue(postApplicationRequestAtom);
  const selectTime = data.selectTime;

  const postPay = async () => {
    const accesstoken =
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjUyNTIsImF1dGhvcml0aWVzIjpbIk1FTlRFRSJdLCJpYXQiOjE2OTUwNTExMjQsImV4cCI6MTcyNjU4NzEyNH0.v0ly5U3mVe15JyctMOHxBT_YZUZev5szX623gy1ND8s';

    if (total !== undefined) {
      const body = {
        postId: Number(params.postId),
        selectTime,
        totalPrice: total,
      };
      try {
        const response = await axios.post(`https://codevelop.store/api/v1/post/order`, body, {
          headers: {
            Authorization: accesstoken,
          },
        });
        console.log('성공적');
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const clickStep = (state) => {
    if (step === '신청하기' && state === '이전으로') {
      navigate(`/detail/${params.postId}`);
      setShowModal(false);
    } else if (step === '신청하기' && state === '다음으로') {
      setStep('정보확인&결제');
    } else if (step === '정보확인&결제' && state === '이전으로') {
      setStep('신청하기');
    } else if (step === '정보확인&결제' && state === '결제하기') {
      alert('결제완료!');
      setShowModal(false);
      navigate(`/detail/${params.postId}`); // 결제로직
      postPay();
      setStep('신청하기');
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
