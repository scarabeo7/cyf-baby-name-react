import React from "react";

const BabyNames = (props) => {
    // baby names sorted alphabetically
  const SortedBabyNames = props.babyNamesData.sort((a, b) => {
      if(a.name < b.name){
          return -1;
      }else{
          return 1
      }
  });

  return (
    <div className="data">
      {SortedBabyNames.map((el, index) => (
        <p className = {el.sex} key={index}>{el.name}</p>
      ))}
    </div>
  );
};

export default BabyNames;
