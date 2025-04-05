import PropTypes from "prop-types";
import React from "react";

const InputComponent = ({ onKeyDown, ref, placeholder, value, onChange }) => {
  return (
    <input
      className="border border-black  rounded-lg  h-9 m-1.5  w-full text-center"
      type="text"
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      ref={ref}
      value={value}
      onChange={onChange}
      // onChange={(e) => handleSaveTodo(e)}
      // value={listTodo}
    />
  );
};

InputComponent.propTypes = {
  onKeyDown: PropTypes.func,
  ref: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputComponent;
