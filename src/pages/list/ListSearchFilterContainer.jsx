import { Icon } from 'src/components/common/icon/Icon';

const ListSearchFilterContainer = () => {
  return (
    <form>
      <Icon name="Search" />
      <label>
        <input type="text" />
      </label>
      <button>검색</button>
    </form>
  );
};

export default ListSearchFilterContainer;
