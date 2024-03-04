// actionTypes.js
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const MARK_INCOMPLETE = "MARK_INCOMPLETE";
export const FILTER_TODOS = "FILTER_TODOS";

export type TodoAction =
  | { type: "ADD_TODO"; payload: { text: string } }
  | { type: "TOGGLE_TODO"; payload: { id: number } }
  | { type: "REMOVE_TODO"; payload: { id: number } }
  | { type: "MARK_COMPLETED"; payload: { id: number } }
  | { type: "MARK_INCOMPLETE"; payload: { id: number } }
  | { type: "FILTER_TODOS"; payload: { filter: string } };
