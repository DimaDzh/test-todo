import { createStore, Store } from "redux"

import todoReducer, { TodoState } from "./reducer"
import { TodoAction } from "./actionTypes"

// Get the state from session storage, if it exists
const savedState = sessionStorage.getItem("reduxState")
const initialState: TodoState = savedState
  ? JSON.parse(savedState)
  : {
    todos: [],
    completedCount: 0,
    incompleteCount: 0,
    filter: "ALL",
  }

const store: Store<TodoState, TodoAction> = createStore(
  todoReducer,
  initialState
)

// Save store to session storage whenever it changes
store.subscribe(() => {
  // Get the current state from the store
  const currentState = store.getState()

  // Save the state to session storage
  sessionStorage.setItem("reduxState", JSON.stringify(currentState))
})

export default store
