import React, { createContext, useReducer } from 'react';
import {v4 as uuid} from 'uuid';
import todoReducer from '../reducers/todo.reducer';
// import useTodoState from '../hooks/useTodoState'; // replaced by reducer

// some generic data
const defaultTodos = [
  { id: uuid(), task: "Clean Fishtank", completed: true },
  { id: uuid(), task: "Wash Car", completed: true },   
  { id: uuid(), task: "Grow Beard", completed: false },
  { id: uuid(), task: "Go shopping for Tina", completed: false },
]

// Export Context
export const TodosContext = createContext();

// Export Provider
export const TodosProvider = (props) => {
  // const { todos, addTodo, removeTodo, toggleTodo, EditTodo } = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  )
};



