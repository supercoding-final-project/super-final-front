import { Icon } from 'src/components/common/icon/Icon';

const ListSearchFilterContainer = ({ searchInput, handleInputChange, handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <Icon name="Search" />
      <label>
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          // placeholder={`검색 (${activeTab})`}
        />
      </label>
      <button>검색</button>
    </form>
  );
};

export default ListSearchFilterContainer;
