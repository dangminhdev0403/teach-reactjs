import PropTypes from "prop-types";

const Todo = ({ todo, handleCompleted, handleShowSideBar }) => {
  return (
    <button
      className="flex  text-center border border-gray-400 bg-amber-200 mb-0.5 w-full"
      onClick={() => {
        handleShowSideBar(todo.id);
      }}
    >
      <input
        type="checkbox"
        name="check"
        id="check"
        checked={todo.isCompleted}
        onChange={() => {
          handleCompleted(todo);
        }}
        onClick={(e) => e.stopPropagation()}
      />
      <p className="w-full">{todo.name} </p>

      {todo.isImportant && <div>★</div>}
    </button>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isImportant: PropTypes.bool.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  handleCompleted: PropTypes.func.isRequired,
  handleShowSideBar: PropTypes.func.isRequired,
};

export default Todo;
