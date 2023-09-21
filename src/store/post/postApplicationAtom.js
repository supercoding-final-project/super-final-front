import { atom, selector } from 'recoil';

export const postApplicationAtom = atom({
  key: 'postApplicationAtom',
  default: {
    step: '신청하기',
    current: new Date(),
    stepTime: 'AM',
    dateValue: `${new Date().getFullYear()}-${(new Date().getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`,
  },
});

// export const postTimeDataSelector = (postId) =>
//   selector({
//     key: 'postTimeDataSelector',
//     get: async () => {
//       console.log(postId);

//       // const days = get(postQueryStringRequestAtom);
//       // const days = encodeURIComponent(get(postQueryStringRequestAtom));
//       // console.log(days);

//       // const response = await axios.get(
//       //   `http://13.124.66.205:8080//api/v1/post/day?postId=${postId}&days=${days}`,
//       // );
//       // const response = {
//       //   success: true,
//       //   status: 200,
//       //   message: '멘토의 신청가능한 시간이 조회되었습니다.',
//       //   data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//       // };
//       // return response.data; // 요청 결과를 반환
//     },
//   });

export const postApplicationStepSelector = selector({
  key: 'postApplicationStepSelector',
  get: ({ get }) => {
    const applicationState = get(postApplicationAtom);
    return applicationState.step;
  },
  set: ({ set }, newStep) => {
    set(postApplicationAtom, (prevApplicationState) => ({
      ...prevApplicationState,
      step: newStep,
    }));
  },
});

export const postApplicationCurrentSelector = selector({
  key: 'postApplicationCurrentSelector',
  get: ({ get }) => {
    const applicationState = get(postApplicationAtom);
    return applicationState.current;
  },
  set: ({ set }, newCurrent) => {
    set(postApplicationAtom, (prevApplicationState) => ({
      ...prevApplicationState,
      current: newCurrent,
    }));
  },
});

export const postApplicationDateValueSelector = selector({
  key: 'postApplicationDateValueSelector',
  get: ({ get }) => {
    const applicationState = get(postApplicationAtom);
    return applicationState.dateValue;
  },
  set: ({ set }, newDateValue) => {
    set(postApplicationAtom, (prevApplicationState) => ({
      ...prevApplicationState,
      dateValue: newDateValue,
    }));
  },
});

// 멘토의 시간 불러오기 위해 날짜 atom
export const postQueryStringRequestAtom = atom({
  key: 'postQueryStringRequestAtom',
  default: (() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}년 ${month}월 ${day}일`;
  })(),
});

export const postQueryStringRequestSelector = selector({
  key: 'postQueryStringRequestSelector',
  get: ({ get }) => {
    const queryString = get(postQueryStringRequestAtom);
    return queryString;
  },
  set: ({ set }, newDay) => {
    set(postQueryStringRequestAtom, newDay);
  },
});

export const postApplicationRequestAtom = atom({
  key: 'postApplicationRequestAtom',
  default: {
    postId: null,
    selectTime: [],
    totalPrice: 0,
  },
});

export const postApplicationRequestSelectTimeSelector = selector({
  key: 'postApplicationRequestSelectTimeSelector',
  get: ({ get }) => {
    const day = get(postQueryStringRequestAtom);
    const applicationRequest = get(postApplicationRequestAtom);

    // 중복된 day가 있는지 확인
    const isDuplicate = applicationRequest.selectTime.some((selectTime) => selectTime.day === day);

    if (isDuplicate) {
      // 중복이 있을 경우, 마지막으로 추가된 값을 반환
      const lastSelectTime =
        applicationRequest.selectTime[applicationRequest.selectTime.length - 1];
      return lastSelectTime;
    } else {
      // 중복이 없을 경우 빈 배열 반환
      const data = {
        day,
        timeList: [],
      };
      return data;
    }
  },

  set: ({ set }, newSelectTime) => {
    set(postApplicationRequestAtom, (prevApplicationRequest) => {
      // 이미 존재하는 day의 데이터를 업데이트하거나, 없을 경우 새로 추가
      const updatedSelectTime = prevApplicationRequest.selectTime.filter(
        (selectTime) => selectTime.day !== newSelectTime.day,
      );
      return {
        ...prevApplicationRequest,
        selectTime: [...updatedSelectTime, newSelectTime],
      };
    });
  },
});

// export const postApplicationRequestSelectPriceSelector = selector({
//   key: 'postApplicationRequestSelectPriceSelector',
//   get: ({ get }) => {
//     // const price = get(postQueryStringRequestAtom);
//     const request = get(postQueryStringRequestAtom);
//     const totalLength = request.selectTime;
//     console.log(totalLength);
//     return request;
//   },
//   set: ({ set }, price) => {
//     set(postQueryStringRequestAtom, (prevPostQueryStringRequestAtom) => ({
//       ...prevPostQueryStringRequestAtom,
//       price,
//     }));
//   },
// });

// export const postApplicationRequestSelectIdSelector = selector({
//   key: 'postApplicationRequestSelectIdSelector',
//   get: ({ get }) => {
//     const id = get(postQueryStringRequestAtom);
//     return id;
//   },
//   set: ({ set }, id) => {
//     set(postQueryStringRequestAtom, id);
//   },
// });
