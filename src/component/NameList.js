import React from "react";

const NameList = ({ nameList, onNameClick }) => {
  return (
    <div className="data">
      {nameList.map((el, index) => (
        <p className={el.sex} key={index} onClick={() => onNameClick(el.id)}>
          {el.name}
        </p>
      ))}
    </div>
  );
};

export default NameList;
