const mentor = {
  success: true,
  status: 0,
  message: 'string',
  data: [
    {
      postId: 0,
      mentorDto: {
        mentorId: 0,
        mentorAbstractAccountId: 0,
        nickname: 'string',
        email: 'string',
        thumbnailImageUrl: 'string',
        introduction: 'string',
        company: 'string',
        searchable: true,
        currentDuty: 'NONE',
        currentPeriod: 'string',
        mentorSkillStackList: [
          {
            mentorSkillStackId: 0,
            mentorDto: 'string',
            skillStackDto: {
              skillStackId: 0,
              skillStackName: 'string',
              skillStackImg: 'string',
            },
          },
        ],
        mentorCareerList: [
          {
            dutyType: 'NONE',
            period: 'string',
          },
        ],
      },
      title: 'string',
      level: 'string',
      price: 0,
      postStack: 'string',
      workCareer: ['string'],
      educateCareer: ['string'],
      reviewStyle: ['string'],
    },
  ],
};

const skill = {
  success: true,
  status: 0,
  message: 'string',
  data: [
    {
      postId: 0,
      mentorDto: {
        mentorId: 0,
        mentorAbstractAccountId: 0,
        nickname: 'string',
        email: 'string',
        thumbnailImageUrl: 'string',
        introduction: 'string',
        company: 'string',
        searchable: true,
        currentDuty: 'NONE',
        currentPeriod: 'string',
        mentorSkillStackList: [
          {
            mentorSkillStackId: 0,
            mentorDto: 'string',
            skillStackDto: {
              skillStackId: 0,
              skillStackName: 'string',
              skillStackImg: 'string',
            },
          },
        ],
        mentorCareerList: [
          {
            dutyType: 'NONE',
            period: 'string',
          },
        ],
      },
      title: 'string',
      level: 'string',
      price: 0,
      postStack: 'string',
      workCareer: ['string'],
      educateCareer: ['string'],
      reviewStyle: ['string'],
    },
  ],
};

export default { mentor, skill };
