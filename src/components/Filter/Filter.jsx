import React, { useEffect, useState } from "react";
import { AppContext } from "../../context/FilterProvider";
import InputComponent from "../InputComponent";

const itemFilter = [
  {
    id: "all",
    label: "ALL",
  },
  {
    id: "important",
    label: "Important",
  },
  {
    id: "completed",
    label: "Completed",
  },
];

console.log("itemFilter re-render", itemFilter);

const Filter = ({ search, setSearch, listTodo }) => {
  const [count, setCount] = useState({
    all: 0,
    important: 0,
    completed: 0,
  });

  useEffect(() => {
    const newTodos = listTodo.reduce(
      (acc, curr) => {
        if (curr.isImportant) acc.important += 1;
        if (curr.isCompleted) acc.completed += 1;
        acc.all += 1;
        return acc;
      },
      {
        all: 0,
        important: 0,
        completed: 0,
      }
    );
    setCount(newTodos);
  }, [listTodo]);

  const { activeFilter, setActiveFilter } = React.useContext(AppContext);
  const handleActive = (id) => {
    setActiveFilter(id);
  };
  return (
    <>
      <InputComponent
        placeholder={"Search todo"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-1 mx-auto">
        {itemFilter.map((item) => (
          <div
            key={item.id}
            className={`${activeFilter === item.id && "bg-red-500"}`}
          >
            <button
              className=" rounded-lg shadow-lg p-3.5 gap-1 border w-full cursor-pointer "
              onClick={() => {
                handleActive(item.id);
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
                {item.label}({count[item.id]})
              </span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
