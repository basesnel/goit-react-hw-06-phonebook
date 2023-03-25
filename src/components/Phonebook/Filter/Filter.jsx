import PropTypes from 'prop-types';
import { FilterLabel } from './Filter.styled';

// import useLocalStorage from 'components/hooks/useLocalStorage';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className="filter__input"
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
