import { useSelector } from 'react-redux'
import TodoItem from './todo-item'
import { Todo, TodoState } from '../redux/reducer'
import React from 'react'

const TodoList = (): React.JSX.Element => {
  const filteredTodos = useSelector((state: TodoState) => {
    const todos = state.todos

    const filterTodos = (filterString: string):Todo[] => {
      return todos.filter(({ completed }) => {
        switch (filterString) {
          case 'COMPLETED': {
            return completed
          }
          case 'INCOMPLETE': {
            return !completed
          }
          default: {
            return true
          }
        }
      })
    }

    return filterTodos(state.filter)
  })
  return (
    <ul>
      {filteredTodos.length === 0 &&
        <li className='my-2 text-sm italic'>
          All your records will be here....
        </li>
      }

      {filteredTodos
        .map((todo, ind) => <TodoItem key={ind} todo={todo} index={ind} />)}
    </ul>
  )
}

export default TodoList
