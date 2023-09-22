// import React, { useEffect } from 'react';
// import { useRecoilState } from 'recoil';
// import { mentorListState, keywordState, skillStackState, dutiesState } from './recoilState';
// import { fetchMentors } from './api';

// function MentorList() {
//   const [mentorList, setMentorList] = useRecoilState(mentorListState);
//   const [keyword, setKeyword] = useRecoilState(keywordState);
//   const [skillStack, setSkillStack] = useRecoilState(skillStackState);
//   const [duties, setDuties] = useRecoilState(dutiesState);

//   useEffect(() => {
//     // 필터 옵션이 변경될 때마다 API 호출을 다시 수행합니다.
//     const fetchData = async () => {
//       try {
//         const mentors = await fetchMentors(keyword, skillStack, duties);
//         setMentorList(mentors);
//       } catch (error) {
//         // 오류 처리
//       }
//     };

//     fetchData();
//   }, [keyword, skillStack, duties, setMentorList]);

//   return (
//     <div>
//       {/* 키워드 입력 */}
//       <div>
//         <label htmlFor="keyword">키워드 검색:</label>
//         <input
//           type="text"
//           id="keyword"
//           value={keyword}
//           onChange={(e) => setKeyword(e.target.value)}
//         />
//       </div>

//       {/* 기술 스택 필터링 */}
//       <div>
//         <label>기술 스택 필터링:</label>
//         <select
//           multiple
//           value={skillStack}
//           onChange={(e) =>
//             setSkillStack(Array.from(e.target.selectedOptions, (option) => option.value))
//           }
//         >
//           <option value="PYTHON">Python</option>
//           <option value="REACT">React</option>
//           {/* 다른 기술 스택 옵션들을 추가 */}
//         </select>
//       </div>

//       {/* 직무 필터링 */}
//       <div>
//         <label>직무 필터링:</label>
//         <select
//           multiple
//           value={duties}
//           onChange={(e) =>
//             setDuties(Array.from(e.target.selectedOptions, (option) => option.value))
//           }
//         >
//           <option value="BACKEND_DEVELOPER">백엔드 개발자</option>
//           <option value="FRONTEND_DEVELOPER">프론트엔드 개발자</option>
//           {/* 다른 직무 옵션들을 추가 */}
//         </select>
//       </div>

//       {/* 멘토 목록 */}
//       <div>
//         <h2>멘토 목록</h2>
//         {mentorList.map((mentor) => (
//           <MentorListItem key={mentor.id} mentor={mentor} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MentorList;
