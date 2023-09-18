import Button from 'src/components/common/Button';

const ButtonBox = () => {
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
        text="다음으로"
        fontcolor="#FCFCFB"
        bgcolor="#29CC61"
        radius="4px"
        fontSize="20px"
        fontWeight={700}
        onClick={() => clickStep('다음으로')}
      />
    </div>
  );
};

export default ButtonBox;
