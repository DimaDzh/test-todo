import { createStore, Store } from 'redux'

import todoReducer, { TodoState } from './reducer'
import { TodoAction } from './action-types'

const savedState = sessionStorage.getItem('reduxState')
const initialState: TodoState = savedState ? JSON.parse(savedState) : {
  'todos': [],
  'completedCount': 0,
  'incompleteCount': 0,
  'filter': 'ALL',
}

const store: Store<TodoState, TodoAction> = createStore(
  todoReducer,
  initialState,
)

store.subscribe(() => {
  const currentState = store.getState()

  sessionStorage.setItem('reduxState', JSON.stringify(currentState))
})

export default store
