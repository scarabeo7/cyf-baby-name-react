import React from "react";

const SearchName = ({
  searchVal,
  setSearchVAl,
  gender,
  setGender,
  SortBabyNames,
}) => {
  const handleSearch = (e) => {
    setSearchVAl(e.target.value);
  };
  const handleGenderSort = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
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
      <button className="btn btn-dark m-2" onClick={handleGenderSort}>
        All
      </button>
      <button className="btn btn-danger m-2" onClick={handleGenderSort}>
        Girls
      </button>
      <button className="btn btn-primary m-2" onClick={handleGenderSort}>
        Boys
      </button>
    </div>
  );
};

export default SearchName;
