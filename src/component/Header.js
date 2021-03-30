import React from "react";

const Header = (props) => {
  return <h1>{props.title}</h1>;
};

Header.defaultProps = {
  title: "Baby Name Picker",
};

export default Header;
