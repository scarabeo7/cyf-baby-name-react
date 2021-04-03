import React from "react";
import NameList from "./NameList";

const Favorites = ({ names, favorite, setFavorite }) => {
  const favoriteNames = names.filter((data) => favorite.includes(data.id));
  const removeFavNames = (id) => {
    setFavorite(favorite.filter((item) => item !== id));
  };

  return (
    <div className="favorite">
      <h4>Click on some names to add to your favorite list...</h4>
      <NameList nameList={favoriteNames} onNameClick={removeFavNames} />
    </div>
  );
};

export default Favorites;
