import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
} from "./actionTypes"

export const addTodo = (
  text: string
): { type: string, payload: { text: string } } => ({
  type: ADD_TODO,
  payload: { text },
})

export const toggleTodo = (
  id: number
): { type: string, payload: { id: number } } => ({
  type: TOGGLE_TODO,
  payload: { id },
})

export const removeTodo = (
  id: number
): { type: string, payload: { id: number } } => ({
  type: REMOVE_TODO,
  payload: { id },
})

export const markCompleted = (
  id: number
): { type: string, payload: { id: number } } => ({
  type: MARK_COMPLETED,
  payload: { id },
})

export const markIncomplete = (
  id: number
): { type: string, payload: { id: number } } => ({
  type: MARK_INCOMPLETE,
  payload: { id },
})

export const filterTodos = (
  filter: string
): { type: string, payload: { filter: string } } => ({
  type: FILTER_TODOS,
  payload: { filter },
})
