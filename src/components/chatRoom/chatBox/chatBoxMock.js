import mento from '@/assets/chatMock/mento.png';

const chatLog = [
  {
    isSend: false,
    profileImg: mento,
    sendAt: '오후 04:16',
    text: `안녕하세요 !\n
    프론트엔드 고인물 하진수입니다.\n
    저에게 코드리뷰를 받고 싶으세요?\n
    슈퍼코딩을 정복한 남자 !\n
    무엇이든 물어보세요 !`,
  },
  {
    isSend: true,
    profileImg: '',
    sendAt: '오후 04:21',
    text: '살려주세요 선생님',
  },
  {
    isSend: false,
    profileImg: mento,
    sendAt: '오후 05:22',
    text: `그렇게 무례하게 말하면\n
    도와드릴 수 없습니다.`,
  },
];

export default chatLog;
