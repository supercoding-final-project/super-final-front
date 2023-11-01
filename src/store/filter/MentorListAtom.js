// recoilState.js 파일에서 Recoil 상태를 정의합니다.
import { atom } from 'recoil';

// 모든 멘토 조회
export const mentorListAtom = atom({
  key: 'mentorListAtom',
  default: [], // 초기값은 빈 배열
});

// 키워드 조회
export const keywordAtom = atom({
  key: 'keywordAtom',
  default: '',
});

// 기술 스택 필터링
export const skillStackAtom = atom({
  key: 'skillStackAtom',
  default: [],
});

// 직무 필터링
export const dutiesAtom = atom({
  key: 'dutiesAtom',
  default: [],
});

// 모든 멘토 조회 https://codevelop.store/api/v1/mentors
// 키워드 조회 https://codevelop.store/api/v1/mentors?keyword=진수
// 기술 스택 필터링 https://codevelop.store/api/v1/mentors?skillStack=PYTHON, REACT
// 직무 필터링 https://codevelop.store/api/v1/mentors?duties=BACKEND_DEVELOPER
// 키워드 + 기술 스택 필터링 https://codevelop.store/api/v1/mentors?keyword=진수&skillStack=PYTHON, REACT
// 키워드 + 기술 스택 + 직무 필터링 https://codevelop.store/api/v1/mentors?keyword=진수&skillStack=PYTHON, REACT&duties=FRONTEND_DEVELOPER
// 기술스택 + 직무 필터링 https://codevelop.store/api/v1/mentors?skillStack=PYTHON, REACT&duties=FRONTEND_DEVELOPER
// 이렇게 사용하시면 됩니다!
