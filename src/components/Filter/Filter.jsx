import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ onInputChange, filter }) => (
  <Label>
    Find contacts by name
    <input onChange={onInputChange} type="text" name="filter" value={filter} />
  </Label>
);

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
