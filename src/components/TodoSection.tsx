import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsPlus } from "react-icons/bs";
import { addTodo } from "../redux/actions";

type TodoListProps = {
  validTotoLength: number;
};

const TodoSection: FC<TodoListProps> = ({ validTotoLength }) => {
  // const todos = useSelector((state: TodoState) => state.todos);
  // const filter = useSelector((state: TodoState) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const textLength = newTodoText.concat().split("").length;
  const isValidTodoText = textLength > validTotoLength;

  const handleAddTodo = (text: string): void => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = (): void => {
    if (newTodoText.trim() !== "" && isValidTodoText) {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded container">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        ToDo list
      </h2>
      <div className="flex items-center mb-8">
        <div className="flex relative w-full">
          <input
            id="addTodoInput"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Add Todo"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          {!isValidTodoText && (
            <span className="text-xs absolute bottom-0 translate-y-full px-2 pt-1 text italic">
              Todo text length must be longer than :{" "}
              <span className="font-bold underline text-red-500">
                {validTotoLength}
              </span>
            </span>
          )}
        </div>
        <button
          className={`ml-4 p-2  text-white rounded  focus:outline-none ${
            isValidTodoText
              ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
              : " bg-gray-300 cursor-not-allowed"
          }`}
          onClick={handleAddTodoClick}
          disabled={!isValidTodoText}
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
      </div>

      <TodoList />
    </div>
  );
};

export default TodoSection;
