import { Icon } from 'src/components/common/icon/Icon';

const ListSearchFilterContainer = ({
  index,
  data,
  activeTab,
  // handleSearch,
  handleInputChange,
  keyword,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침을 방지
    // handleSearch(); // 검색 버튼 클릭과 동일한 작업 수행
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 엔터 키 입력 시 페이지 새로고침을 방지
      // handleSearch(); // 검색 버튼 클릭과 동일한 작업 수행
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Icon name="Search" />
      <label>
        <input
          key={index}
          data={data}
          type="text"
          value={keyword}
          onChange={handleInputChange}
          placeholder={`${activeTab} 검색하기`}
          onKeyPress={handleKeyPress} // 엔터 키 이벤트 처리
        />
      </label>
      <button>검색</button>
    </form>
  );
};

export default ListSearchFilterContainer;
