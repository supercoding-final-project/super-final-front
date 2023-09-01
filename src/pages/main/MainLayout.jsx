import Button from '@/components/common/Button';

const MainLayout = () => {
  return (
    <>
      <Button text={'text 입니다.'} bgcolor={'#1A6DFF'} fontcolor={'white'} />
      <Button text={'purpose가 test일 때'} purpose="test" />
      <Button text={'purpose가 test2일 때'} fontcolor={'skyblue'} purpose="test2" />
    </>
  );
};

export default MainLayout;
