import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { TodoState } from "../redux/reducer"

const TodoList = (): JSX.Element => {
  const filteredTodos = useSelector((state: TodoState) => {
    const todos = state.todos
    const filter = state.filter

    return todos.filter((todo) => {
      const matchesFilter =
        filter === "COMPLETED" && todo.completed ||
        filter === "INCOMPLETE" && !todo.completed ||
        filter === "ALL"
      return matchesFilter
    })
  })

  return (
    <ul>
      {filteredTodos.length === 0 && 
        <li className="my-2 text-sm italic">
          All your records will be here....
        </li>
      }

      {filteredTodos.map((todo, index) => 
        <TodoItem key={index} todo={todo} index={index} />
      )}
    </ul>
  )
}

export default TodoList
