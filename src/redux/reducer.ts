import { Reducer } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  FILTER_TODOS,
  TodoAction,
} from './action-types'

interface Todo {
  text: string
  completed: boolean
}

interface TodoState {
  todos: Todo[]
  filter: string
  completedCount: number
  incompleteCount: number
}

const initialState: TodoState = {
  'todos': [],
  'filter': 'ALL',
  'completedCount': 0,
  'incompleteCount': 0,
}

const todoReducer: Reducer<TodoState, TodoAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ADD_TODO: {
      return addTodoReducer(state, action)
    }
    case TOGGLE_TODO: {
      return toggleTodoReducer(state, action)
    }
    case REMOVE_TODO: {
      return removeTodoReducer(state, action)
    }

    case FILTER_TODOS: {
      return { ...state, 'filter': action.payload.filter }
    }
    default: {
      return state
    }
  }
}

const addTodoReducer = (state: TodoState, action: TodoAction): TodoState => {
  const newTodo = { 'text': action.payload.text, 'completed': false }
  return {
    ...state,
    'todos': [...state.todos, newTodo],
    'incompleteCount': state.incompleteCount + 1,
  }
}

const toggleTodoReducer = (state: TodoState, action: TodoAction):TodoState => {
  const updatedTodos = state
    .todos
    .map((todo, index) => {
      if (index === action.payload.id) {
        return { ...todo, 'completed': !todo.completed }
      }
      return todo
    })
  const completedCount = updatedTodos.filter((todo) => todo.completed).length
  return {
    ...state,
    'todos': updatedTodos,
    completedCount,
    'incompleteCount': state.todos.length - completedCount,
  }
}

const removeTodoReducer = (state: TodoState, action: TodoAction):TodoState => {
  const removedTodo = state.todos[action.payload.id]
  return {
    ...state,
    'todos': state.todos
      .filter((___, index) => index !== action.payload.id),
    'incompleteCount':
     removedTodo.completed ? state.incompleteCount : state.incompleteCount - 1,
    'completedCount':
     removedTodo.completed ? state.completedCount - 1 : state.completedCount,
  }
}

export type { Todo, TodoState }

export default todoReducer
