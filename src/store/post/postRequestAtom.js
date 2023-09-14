import { atom } from 'recoil';

export const postRequestAtom = atom({
  key: 'postRequestAtom',
  default: {
    title: '',
    level: '',
    price: null,
    postStack: '',
    workCareer: [],
    educateCareer: [],
    reviewStyle: [],
  },
});
