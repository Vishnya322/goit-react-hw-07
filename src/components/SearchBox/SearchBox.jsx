import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const selectNameFilter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleSearch = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <p className={css.label}>Select contacts by name</p>
      <input
        className={css.searchForm}
        type="text"
        value={selectNameFilter}
        onChange={handleSearch}
        id="searchInput"
        autoComplete="off"
        name="searchInput"
      />
    </div>
  );
};

export default SearchBox;
