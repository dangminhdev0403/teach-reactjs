import { useRef, useState } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import SideBar from "./components/SideBar";
import Todo from "./components/Todo";

function App() {
  const [listTodo, setListTodo] = useState([
    { id: 1, name: "Learn React", isImportant: false, isCompleted: false },
    { id: 2, name: "Learn Nodejs", isImportant: false, isCompleted: false },
    { id: 3, name: "Learn Java", isImportant: false, isCompleted: false },
    { id: 4, name: "Learn Nextjs", isImportant: false, isCompleted: false },
  ]);

  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const [idTodoActive, setIdTodoActive] = useState(null);

  const todo = listTodo.find((t) => t.id === idTodoActive);

  const refInput = useRef(null);

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
    };

    setListTodo((listTodo) => [...listTodo, newTodo]);

    setListTodo([...listTodo, newTodo]);

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
  console.log("re-render");

  return (
    <div className="flex justify-center items-start w-full  j ">
      <div className="w-full  flex-1 bg-[#f5f5f5] h-[20rem] rounded-b-lg shadow-2xl ">
        <InputComponent placeholder={"Search todo"} />
        <div className="grid grid-cols-2 gap-1 mx-auto">
          <div className=" rounded-lg shadow-lg p-3.5 gap-1 border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-list"
            >
              <path d="M3 12h.01"></path>
              <path d="M3 18h.01"></path>
              <path d="M3 6h.01"></path>
              <path d="M8 12h13"></path>
              <path d="M8 18h13"></path>
              <path d="M8 6h13"></path>
            </svg>
            <span>ALL(2)</span>
          </div>
          <div className=" rounded-lg shadow-lg p-3.5 gap-1 border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-list"
            >
              <path d="M3 12h.01"></path>
              <path d="M3 18h.01"></path>
              <path d="M3 6h.01"></path>
              <path d="M8 12h13"></path>
              <path d="M8 18h13"></path>
              <path d="M8 6h13"></path>
            </svg>
            <span>ALL(2)</span>
          </div>
          <div className=" rounded-lg shadow-lg p-3.5 gap-1 border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-list"
            >
              <path d="M3 12h.01"></path>
              <path d="M3 18h.01"></path>
              <path d="M3 6h.01"></path>
              <path d="M8 12h13"></path>
              <path d="M8 18h13"></path>
              <path d="M8 6h13"></path>
            </svg>
            <span>ALL(2)</span>
          </div>
          <div className=" rounded-lg shadow-lg p-3.5 gap-1 border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-list"
            >
              <path d="M3 12h.01"></path>
              <path d="M3 18h.01"></path>
              <path d="M3 6h.01"></path>
              <path d="M8 12h13"></path>
              <path d="M8 18h13"></path>
              <path d="M8 6h13"></path>
            </svg>
            <span>ALL(2)</span>
          </div>
        </div>
      </div>

      <div className="todo-list mt-10 flex-[2] justify-center flex flex-col items-center ">
        <div>
          <h4 className="font-bold text-xl text-center  text-red-500 ">
            My Todo List
          </h4>
          <InputComponent
            placeholder={"Add a todo"}
            onKeyDown={(e) => handleSaveTodo(e, refInput.current.value)}
            ref={refInput}
          />

          {listTodo.map((todo) => (
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
      </div>
    </div>
  );
}

export default App;
