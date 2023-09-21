// import Button from 'src/components/common/Button';

import { useRecoilValue } from 'recoil';

import ButtonBox from './ButtonBox';
import MetaBox from './MetaBox';
import TotalPrice from './TotalPrice';
import { postApplicationRequestAtom } from '../../../../store/post/postApplicationAtom';

const DetailInformation = ({ setShowModal, price, title, mentoId }) => {
  // console.log(title);

  const request = useRecoilValue(postApplicationRequestAtom);
  const lengthArr = request.selectTime.map((el) => el.timeList.length);
  const totalLength = lengthArr.reduce((a, b) => a + b, 0);
  const total = price * totalLength;
  return (
    <>
      <p className="info-title">신청 정보 확인</p>
      <MetaBox title={title} mentoId={mentoId} />
      <TotalPrice price={price} total={total} totalLength={totalLength} />
      <ButtonBox setShowModal={setShowModal} total={total} />
    </>
  );
};

export default DetailInformation;
