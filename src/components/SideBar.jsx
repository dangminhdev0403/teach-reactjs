import PropTypes from "prop-types";
import React, { useState } from "react";
import InputComponent from "./InputComponent";

const SideBar = ({ setIsShowSideBar, todo, handleChangeTodo, children }) => {
  console.log("Child props" + children);

  const [name, setName] = useState(todo.name);
  const [isImportant, setIsImportant] = useState(todo.isImportant);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const data = { ...todo, name, isImportant, isCompleted };

  return (
    <div className="text-lg fixed  top-0 right-0 border border-gray-400 h-[100vh] shadow-lg  shadow-gray-500 flex items-center justify-center flex-col w-[25rem]">
      <h4 className="font-bold text-center  text-red-500 text-2xl">
        Edit My Todo
      </h4>
      <InputComponent
        placeholder={"Edit a todo"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="ml-7">
        <span className="mr-0.5">Is Important</span>
        <input
          type="checkbox"
          name="important"
          id="important"
          checked={isImportant}
          onChange={(e) => setIsImportant(e.target.checked)}
        />
      </div>
      <div className="ml-7">
        <span className="mr-0.5">Is Completed</span>
        <input
          type="checkbox"
          name="complete"
          id="complete"
          onChange={(e) => setIsCompleted(e.target.checked)}
          checked={isCompleted}
        />
      </div>
      <div className="flex justify-around  w-full mt-2.5">
        <button
          className="button bg-[#52e857]   p-1.5 px-4.5 rounded"
          onClick={() => handleChangeTodo(data)}
        >
          Save
        </button>
        <button
          className=" bg-[#f44336] p-1.5  px-4.5 rounded"
          onClick={() => setIsShowSideBar(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  setIsShowSideBar: PropTypes.func.isRequired,
  handleChangeTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isImportant: PropTypes.bool.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
};

export default SideBar;
