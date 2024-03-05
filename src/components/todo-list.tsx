import { useSelector } from 'react-redux'
import TodoItem from './todo-item'
import { TodoState } from '../redux/reducer'
import React from 'react'

const TodoList = (): React.JSX.Element => {
  const filteredTodos = useSelector((state: TodoState) => {
    const todos = state.todos
    const filter = state.filter

    return todos.filter(({ completed }) => {
      return filter === 'COMPLETED' && completed ||
        filter === 'INCOMPLETE' && !completed ||
        filter === 'ALL'
    })
  })

  return (
    <ul>
      {filteredTodos.length === 0 &&
        <li className='my-2 text-sm italic'>
          All your records will be here....
        </li>
      }

      {filteredTodos.map((todo, index) => <TodoItem key={index} todo={todo} index={index} />)}
    </ul>
  )
}

export default TodoList
