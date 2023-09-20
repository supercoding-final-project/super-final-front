import { useState } from 'react';

const PageBtn = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);
  const pageHandler = (page) => {
    setPage(page);
  };
  return (
    <ul>
      {[...Array(totalPages)].map((_, i) => {
        const pageNum = i + 1;
        return (
          <li
            key={i}
            className={pageNum === page ? 'active' : ''}
            onClick={() => pageHandler(pageNum)}
          >
            {pageNum}
          </li>
        );
      })}
      <li className="next">다음</li>
    </ul>
  );
};

export default PageBtn;

// 카드 정보는 무조건
// totalPages, hasNext => 다음 페이지 존재 여부
