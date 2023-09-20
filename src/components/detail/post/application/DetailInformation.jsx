// import Button from 'src/components/common/Button';

import ButtonBox from './ButtonBox';
import MetaBox from './MetaBox';
import TotalPrice from './TotalPrice';

const DetailInformation = ({ setShowModal }) => {
  return (
    <>
      <p className="info-title">신청 정보 확인</p>
      <MetaBox />
      <TotalPrice />
      <ButtonBox setShowModal={setShowModal} />
    </>
  );
};

export default DetailInformation;
