import React from 'react';
import { DebounceInput } from 'react-debounce-input';

const SearchBar = ({ onChange}) => {
    return (
      <DebounceInput
        minLength={2}
        debounceTimeout={1000}
        type="text"
        laceholder="Search your Gif"
        className="form-search form control"
        onChange={onChange} />
      );
}


export default SearchBar;
