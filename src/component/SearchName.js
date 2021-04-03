import React from "react";

const SearchName = ({
  searchVal,
  setSearchVAl,
  setGender,
}) => {
  const handleSearch = (e) => {
    setSearchVAl(e.target.value);
  };
  const handleGenderSort = (data) => {
    setGender(data)
  };
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a name..."
        onChange={handleSearch}
        value={searchVal}
      />
      <button className="btn btn-dark m-2" onClick={() => handleGenderSort("")}>
        All
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => handleGenderSort("f")}
      >
        Girls
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => handleGenderSort("m")}
      >
        Boys
      </button>
    </div>
  );
};

export default SearchName;
