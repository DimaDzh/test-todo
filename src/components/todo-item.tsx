import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { toggleTodo, removeTodo } from '../redux/actions'
import { Todo } from '../redux/reducer'
import { FaTrash } from 'react-icons/fa'
import React from 'react'

const TodoItem = ({
  todo,
  index,
}: {
  todo: Todo
  index: number
}): React.JSX.Element => {
  const dispatch = useDispatch()

  return (
    <motion.li
      className="flex flex-row items-center justify-between
       border-b-2 py-2 cursor-pointer gap-4"
      initial={{ 'opacity': 0, 'x': -20 }}
      animate={{ 'opacity': 1, 'x': 0 }}
      transition={{ 'duration': 0.5, 'delay': index * 0.1 }}
    >
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        <motion.span
          onClick={() => dispatch(toggleTodo(index))}
          className={`mr-4 ${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}
          whileHover={{ 'scale': 1.1 }}
        >
          {todo.text}
        </motion.span>
      </div>
      <div className="space-x-3 ml-8">
        <motion.button
          className="mr-2 text-sm bg-red-500 text-white
           sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
          whileHover={{ 'scale': 1.1 }}
        >
          <FaTrash />
        </motion.button>
      </div>
    </motion.li>
  )
}

export default TodoItem
