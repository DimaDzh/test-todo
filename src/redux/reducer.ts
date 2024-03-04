import { Reducer } from "redux"
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  TodoAction,
} from "./actionTypes"

const initialState: TodoState = {
  todos: [],
  filter: "ALL",
  completedCount: 0,
  incompleteCount: 0,
}

const todoReducer: Reducer<TodoState, TodoAction> = (
  state = initialState,
  action
) => {
  let updatedTodos
  let removedTodo
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        incompleteCount: state.incompleteCount + 1,
      }

    case TOGGLE_TODO:
      updatedTodos = state.todos.map((todo, index) =>
        index === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
      return {
        ...state,
        todos: updatedTodos,
        completedCount: updatedTodos.filter((todo) => todo.completed).length,
        incompleteCount: updatedTodos.filter((todo) => !todo.completed).length,
      }

    case REMOVE_TODO:
      removedTodo = state.todos[action.payload.id]
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload.id),
        incompleteCount: removedTodo.completed
          ? state.incompleteCount
          : state.incompleteCount - 1,
        completedCount: removedTodo.completed
          ? state.completedCount - 1
          : state.completedCount,
      }

    case MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        completedCount: state.completedCount + 1,
        incompleteCount: state.incompleteCount - 1,
      }

    case MARK_INCOMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        completedCount: state.completedCount - 1,
        incompleteCount: state.incompleteCount + 1,
      }

    case FILTER_TODOS:
      return {
        ...state,
        filter: action.payload.filter,
      }

    default:
      return state
  }
}

export default todoReducer

export interface Todo {
  text: string
  completed: boolean
}

export interface TodoState {
  todos: Todo[]
  filter: string
  completedCount: number
  incompleteCount: number
}
