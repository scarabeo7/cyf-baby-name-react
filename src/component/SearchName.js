import React from "react";

const SearchName = ({ searchVal, setsearchVAl }) => {
  const handleSearch = (e) => {
    setsearchVAl(e.target.value);
  };
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search name"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchName;
