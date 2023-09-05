import mento from '@/assets/chatMock/mento.png';

export const chatLog = {
  roomId: 1,
  partnerName: '하진수/개발문의 DM', // 채팅 참여자 두 명 닉네임
  profileImg: mento,
  chatLog: [
    {
      senderId: 'test',
      sendAt: '오후 4:16',
      text: `안녕하세요 !\n
    프론트엔드 고인물 하진수입니다.\n
    저에게 코드리뷰를 받고 싶으세요?\n
    슈퍼코딩을 정복한 남자 !\n
    무엇이든 물어보세요 !`,
    },
    {
      senderId: 'sdwrde12',
      sendAt: '오후 4:21',
      text: '살려주세요 선생님',
    },
    {
      senderId: 'test',
      sendAt: '오후 5:22',
      text: `그렇게 무례하게 말하면\n
    도와드릴 수 없습니다.`,
    },
    {
      senderId: 'test',
      sendAt: '오후 5:22',
      text: `그렇게 무례하게 말하면\n
    도와드릴 수 없습니다.`,
    },
    {
      senderId: 'test',
      sendAt: '오후 5:22',
      text: `그렇게 무례하게 말하면\n
    도와드릴 수 없습니다.`,
    },
    {
      senderId: 'test',
      sendAt: '오후 5:22',
      text: `그렇게 무례하게 말하면\n
    도와드릴 수 없습니다.`,
    },
    {
      senderId: 'sdwrde12',
      sendAt: '오후 4:21',
      text: '살려주세요 선생님',
    },
  ],
};

export const partnerProfile = {
  img: mento,
  name: '하진수/개발문의 DM',
  job: '프론트엔드',
  summary: '개발이 제일 쉬웠습니다 연락주세요~',
  summaryTab: {
    mentiMount: 43,
    rating: 4,
    career: 10,
  },
};

export default { chatLog, partnerProfile };
