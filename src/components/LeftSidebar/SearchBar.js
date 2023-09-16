import React from "react";

//This component is for Searchbar
function SearchBar({ searchChange }) {
  return (
    <>
      <input
        style={styles.input}
        className="mb-3"
        placeholder="Search Contact"
        onChange={searchChange}
      ></input>
    </>
  );
}
const styles = {
  input: {
    borderRadius: "6px",
    width: "100%",
    backgroundColor: "#fff",
    outline: "none",
    margin: "auto",
    padding: "5px",
    border: "1px solid #cccccc",
  },
};
export default SearchBar;