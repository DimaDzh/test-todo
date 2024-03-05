type PayloadType = {
  text: string
  id: number
}

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const MARK_COMPLETED = 'MARK_COMPLETED'
export const MARK_INCOMPLETE = 'MARK_INCOMPLETE'
export const FILTER_TODOS = 'FILTER_TODOS'

export type TodoAction =
  | { type: 'ADD_TODO', payload: PayloadType }
  | { type: 'TOGGLE_TODO', payload: PayloadType }
  | { type: 'REMOVE_TODO', payload: PayloadType }
  | { type: 'MARK_COMPLETED', payload: PayloadType }
  | { type: 'MARK_INCOMPLETE', payload: PayloadType }
  | {
    type: 'FILTER_TODOS'
    payload: { filter: string, text: string, id: number }
  }
