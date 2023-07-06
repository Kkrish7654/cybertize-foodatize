import React from "react";

const SearchBox = () => {
  return (
    <form className="relative">
      <input
        className="
        w-full px-3 py-3 rounded-md"
        type="search"
        name="search"
        placeholder="Search Menu & dishes from the restaurant.."
      />
      <img className="absolute right-2 top-2 bg-white p-2" src="./image/search.png" alt="search" />
    </form>
  );
};

export default SearchBox;
