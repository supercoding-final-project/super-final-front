import React, { useState, useEffect } from 'react';

// const PageBtn = ({ mentorsPaging, setMentorsPaging }) => {
const PageMentorBtn = ({ totalPages, currentPage, onPageChange }) => {
  // const [page, setPage] = useState(1);
  // // const [totalPages, setTotalPages] = useState(6);
  // // const [totalPages, setTotalPages] = useState([]);
  // const [totalPages, setTotalPages] = useState(1); // 초기값 1로 설정
  // // const [mentors, setMentors] = useState([]); // Store the list of mentors
  const [isLoading, setIsLoading] = useState(true); // To handle loading state

  useEffect(() => {
    // Simulate an API request here. Replace with your actual API call.
    // You can use the fetch or axios library to fetch data from the API.
    // Here, we'll use a simulated API response for demonstration purposes.
    const fetchData = async () => {
      // Simulate API response delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set loading to false after fetching data
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const pageHandler = (page) => {
    onPageChange(page);
  };

  // 페이지네이션을 13페이지로 제한
  const limitedTotalPages = 13;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {/* {[...Array(totalPages)].map((_, i) => { */}

        {[...Array(Math.min(totalPages, limitedTotalPages))].map((_, i) => {
          const pageNum = i + 1;
          return (
            <li
              key={i}
              className={pageNum === currentPage ? 'active' : ''}
              onClick={() => pageHandler(pageNum)}
            >
              {pageNum}
            </li>
          );
        })}
        {/* 다음 버튼 클릭 처리 */}
        <li
          className={`next ${currentPage >= limitedTotalPages ? 'disabled' : ''}`}
          onClick={() => {
            if (currentPage < limitedTotalPages) {
              pageHandler(currentPage + 1);
            }
          }}
        >
          다음
        </li>
        {/* <li className="next">다음</li> */}
      </ul>
    </div>
  );
};

export default PageMentorBtn;

// 카드 정보는 무조건
// totalPages, hasNext => 다음 페이지 존재 여부
