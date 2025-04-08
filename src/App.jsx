import { useContext, useMemo, useRef, useState } from "react";
import "./App.css";
import Filter from "./components/Filter/Filter";
import InputComponent from "./components/InputComponent";
import SideBar from "./components/SideBar";
import Test from "./components/Test";
import Todo from "./components/Todo";
import { AppContext } from "./context/FilterProvider";

function App() {
  const [listTodo, setListTodo] = useState([
    { id: 1, name: "Learn React", isImportant: false, isCompleted: false },
    { id: 2, name: "Learn Nodejs", isImportant: false, isCompleted: false },
    { id: 3, name: "Learn Java", isImportant: false, isCompleted: false },
    { id: 4, name: "Learn Nextjs", isImportant: false, isCompleted: false },
  ]);

  const { activeFilter } = useContext(AppContext);

  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const [idTodoActive, setIdTodoActive] = useState(null);

  const [search, setSearch] = useState("");
  const todo = listTodo.find((t) => t.id === idTodoActive);

  const refInput = useRef(null);
  const [text, setText] = useState(0);

  // Sử dụng useMemo để memoize filterTodos
  const filterTodos = useMemo(() => {
    return listTodo.filter((todo) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "important") return todo.isImportant === true;
      if (activeFilter === "completed") return todo.isCompleted === true;
      return todo.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [listTodo, activeFilter, search]); // Chỉ tính toán lại khi listTodo, activeFilter, hoặc search thay đổi

  const handleCompleted = (todo) => {
    const newTodo = { ...todo, isCompleted: !todo.isCompleted };
    const newListTodo = listTodo.map((t) => {
      if (todo.id === t.id) return newTodo;
      return t;
    });

    setListTodo(newListTodo);
  };

  const handleSaveTodo = (e, name) => {
    if (e.key !== "Enter") return;

    const newTodo = {
      id: Date.now(),
      name: name,
      isImportant: false,
      isCompleted: false,
    };

    setListTodo((listTodo) => [...listTodo, newTodo]);

    refInput.current.value = "";
  };

  const handleChangeTodo = (updateTodo) => {
    const newListTodo = listTodo.map((t) => {
      if (updateTodo.id === t.id) return updateTodo;
      return t;
    });

    setListTodo(newListTodo);
  };

  const handleShowSideBar = (id) => {
    setIdTodoActive(id);
    setIsShowSideBar(true);
  };

  return (
    <div className="flex justify-center items-start w-full">
      <div className="w-full flex-1 bg-[#f5f5f5] h-[20rem] rounded-b-lg shadow-2xl">
        <Filter search={search} setSearch={setSearch} listTodo={listTodo} />
      </div>
      <div className="todo-list mt-10 flex-[2] justify-center flex flex-col items-center">
        <div>
          <h4 className="font-bold text-xl text-center text-red-500">
            My Todo List
          </h4>
          <InputComponent
            placeholder={"Add a todo"}
            onKeyDown={(e) => handleSaveTodo(e, refInput.current.value)}
            ref={refInput}
          />

          {filterTodos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              handleCompleted={handleCompleted}
              handleShowSideBar={handleShowSideBar}
            />
          ))}
        </div>

        {isShowSideBar && (
          <SideBar
            key={todo.id}
            setIsShowSideBar={setIsShowSideBar}
            handleChangeTodo={handleChangeTodo}
            todo={todo}
          />
        )}
        <button
          onClick={() => {
            setText(text + 1);
          }}
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
        >
          Cộng
        </button>
      </div>

      <Test text={text} setText={setText} />
    </div>
  );
}

export default App;
