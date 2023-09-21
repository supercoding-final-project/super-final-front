import React, { useState, useEffect } from 'react';

// const PageBtn = ({ mentorsPaging, setMentorsPaging }) => {
const PageBtn = ({ totalPages, currentPage, onPageChange }) => {
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

  if (isLoading) {
    return <p>Loading...</p>;
  }
  // useEffect(() => {
  //   // Simulate an API request here. Replace with your actual API call.
  //   // You can use the fetch or axios library to fetch data from the API.
  //   // Here, we'll use a simulated API response for demonstration purposes.
  //   const fetchData = async () => {
  //     // Simulate API response delay
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     // Replace this with your actual API URL
  //     const apiUrl = 'https://codevelop.store/api/v1/mentors?pageSize=8';
  //     // const apiUrl = 'https://codevelop.store/api/v1/mentors?page=8';

  //     // Simulated API response data
  //     const response = {
  //       success: true,
  //       status: 200,
  //       message: 'Mentor 리스트를 성공적으로 가져왔습니다.',
  //       data: {
  //         content: [...mentorsPaging], // Your mentor data array
  //         totalElements: 1126,
  //         totalPages: Math.ceil(1126 / 8), // Calculate totalPages based on totalElements and pageSize
  //       },
  //     };

  //     // Set the mentors and total pages from the API response
  //     setMentorsPaging(response.data.content);
  //     setTotalPages(response.data.totalPages);

  //     // Set loading to false after fetching data
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // const pageHandler = (page) => {
  //   setPage(page);
  //   console.log(page);
  // };

  // const handlePageChange = (newPage) => {
  //   onPageChange(newPage);
  // };

  return (
    // <div>
    //   {isLoading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <>
    //       <ul>
    //         {mentorsPaging.map((mentor) => (
    //           <li key={mentor.mentorId}>{mentor.nickname}</li>
    //           // Render your mentor data here as needed
    //         ))}
    //       </ul>
    //       <ul>
    //         {[...Array(totalPages)].map((_, i) => {
    //           const pageNum = i + 1;
    //           return (
    //             <li
    //               key={i}
    //               className={pageNum === page ? 'active' : ''}
    //               onClick={() => pageHandler(pageNum)}
    //             >
    //               {pageNum}
    //             </li>
    //           );
    //         })}
    //         <li className="next" onClick={() => pageHandler(page + 1)}>
    //           다음
    //         </li>
    //       </ul>
    //     </>
    //   )}
    // </div>
    // <ul>
    //   {[...Array(totalPages)].map((_, i) => {
    //     const pageNum = i + 1;
    //     return (
    //       <li
    //         key={i}
    //         className={pageNum === currentPage ? 'active' : ''}
    //         onClick={() => handlePageChange(pageNum)}
    //       >
    //         {pageNum}
    //       </li>
    //     );
    //   })}
    //   <li className="next" onClick={() => handlePageChange(currentPage + 1)}>
    //     다음
    //   </li>
    // </ul>
    <div>
      <ul>
        {[...Array(totalPages)].map((_, i) => {
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
        <li
          className="next"
          onClick={() => pageHandler(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </li>
      </ul>
    </div>
  );
};

export default PageBtn;

// import { useState } from 'react';

// const PageBtn = () => {
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(6);
//   const pageHandler = (page) => {
//     setPage(page);
//     console.log(page);
//   };
//   return (
//     <ul>
//       {[...Array(totalPages)].map((_, i) => {
//         const pageNum = i + 1;
//         return (
//           <li
//             key={i}
//             className={pageNum === page ? 'active' : ''}
//             onClick={() => pageHandler(pageNum)}
//           >
//             {pageNum}
//           </li>
//         );
//       })}
//       <li className="next">다음</li>
//     </ul>
//   );
// };

// export default PageBtn;

// 카드 정보는 무조건
// totalPages, hasNext => 다음 페이지 존재 여부
