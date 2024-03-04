import { createStore, Store } from "redux";

import todoReducer, { TodoState } from "./reducer";
import { TodoAction } from "./actionTypes";

const initialState: TodoState = {
  todos: [],
  completedCount: 0,
  incompleteCount: 0,
  filter: "ALL",
};

const store: Store<TodoState, TodoAction> = createStore(
  todoReducer,
  initialState
);

export default store;
