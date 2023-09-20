

import * as S from "./PostBorder.style"
const Pagination = ({ postList, size, currentPage, setCurrentPage }) => {
  const totalPageNumber = Math.ceil(postList / size)


  const totalPage = []
  for (let i = 1; i <= totalPageNumber; i++) {
    totalPage.push(i)
  }

  const PageClick = (number) => {
    setCurrentPage(number)
  }
  const beforepage = () => {
    const movepage = currentPage - 1
    console.log(currentPage)
    if (currentPage > 1) {
      setCurrentPage(movepage)
    }

  }

  return <S.PaginationContainer>
    <ul>

      <li onClick={() => beforepage()}>{`<`}</li>
      {totalPage.map(number => {
        return (
          <>
            <li key={number} onClick={() => PageClick(number)}>{number}</li>
          </>
        )
      })}
      <li>{`>`}</li>
    </ul>
  </S.PaginationContainer>;
};

export default Pagination;
