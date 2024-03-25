import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const nameFilter = useSelector(selectNameFilter);
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
        value={nameFilter}
        onChange={handleSearch}
        id="searchInput"
        autoComplete="off"
        name="searchInput"
      />
    </div>
  );
};

export default SearchBox;
