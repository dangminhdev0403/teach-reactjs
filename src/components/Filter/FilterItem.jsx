import React from "react";
import { AppContext } from "../../context/FilterProvider";

const FilterItem = ({ label, count, key }) => {
  const { activeFilter, setActiveFilter } = React.useContext(AppContext);
  console.log("FilterItem re-render", activeFilter);

  const handleActiveFilter = (id) => {
    setActiveFilter(id);
  };

  console.log("FilterItem re-render", activeFilter);

  return (
    <div>
      <button
        className=" rounded-lg shadow-lg p-3.5 gap-1 border w-full cursor-pointer "
        onClick={() => {
          handleActiveFilter(key);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-list"
        >
          <path d="M3 12h.01"></path>
          <path d="M3 18h.01"></path>
          <path d="M3 6h.01"></path>
          <path d="M8 12h13"></path>
          <path d="M8 18h13"></path>
          <path d="M8 6h13"></path>
        </svg>
        <span>
          {label}({count})
        </span>
      </button>
    </div>
  );
};

export default FilterItem;
