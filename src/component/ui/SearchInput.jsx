import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchInput = () => (
  <Input
    placeholder="Search"
    prefix={<SearchOutlined />}  // Adds the search icon to the input field
  />
);

export default SearchInput;
