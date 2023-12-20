import { LabelFilter } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <LabelFilter>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </LabelFilter>
  );
};
export default Filter;
