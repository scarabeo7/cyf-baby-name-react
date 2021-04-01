import "./App.css";
import BabyNames from "./component/BabyNames";
import Header from "./component/Header";
import SearchName from "./component/SearchName";
import babyNamesData from "./data/babyNamesData.json";
import React, { useState } from "react";
import Favorites from "./component/Favorites";

function App() {
  // baby names sorted alphabetically
  const SortBabyNames = babyNamesData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });

  const [searchVAl, setsearchVAl] = useState("");
  const [favorite, setFavorite] = useState([]);

  return (
    <div className="App">
      <Header />
      <SearchName searchVAl={searchVAl} setsearchVAl={setsearchVAl} />
      <Favorites
        favorite={favorite}
        setFavorite={setFavorite}
        names={SortBabyNames}
      />
      <BabyNames
        babyNamesData={SortBabyNames}
        searchVAl={searchVAl}
        favorite={favorite}
        setFavorite={setFavorite}
      />
    </div>
  );
}

export default App;
