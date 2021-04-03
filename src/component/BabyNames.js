import React from "react";
import NameList from "./NameList";

const BabyNames = ({ babyNamesData, searchVAl, favorite, setFavorite, gender }) => {
  const filteredNames = babyNamesData
    .filter((data) => data.name.toLowerCase().includes(searchVAl.toLowerCase()))
    .filter((data) => !favorite.includes(data.id))
    .filter(data => gender ? data.sex === gender:true);
  const handleFavorite = (id) => {
    setFavorite([...favorite, id]);
  };
  return (
    <div>
      <hr />
      <NameList nameList={filteredNames} onNameClick={handleFavorite} />
    </div>
  );
};

export default BabyNames;
