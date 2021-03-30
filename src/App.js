import "./App.css";
import BabyNames from "./component/BabyNames";
import Header from "./component/Header";
import SearchName from "./component/SearchName";
import babyNamesData from "./data/babyNamesData.json";
import React, { useState } from "react";

function App() {
  const [allKids, setAllKids] = useState(babyNamesData);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchString = e.target.value.toLowerCase();
    if (searchString) {
      const filteredNames = babyNamesData.filter((char) => {
        return char.name.toLowerCase().includes(searchString);
      });
      setAllKids(filteredNames);
    } else {
      setAllKids(babyNamesData);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchName handleSearch={handleSearch} />
      <BabyNames babyNamesData={allKids} />
    </div>
  );
}

export default App;
