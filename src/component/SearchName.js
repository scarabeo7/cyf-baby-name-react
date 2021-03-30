import React from "react";

const SearchName = (props) => {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search name"
        onChange={props.handleSearch}
      />
    </div>
  );
};

export default SearchName;
