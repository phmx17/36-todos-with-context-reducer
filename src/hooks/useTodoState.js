import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
  return{
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false /*, index: todos[todos.length -1].index + 1 */ }]);   // adding index creates error when adding first todo manually  
    },
    removeTodo: todoId => {      
      setTodos(todos.filter(todo => todo.id !== todoId))  // filter out removed todo; setTodos with new todos array
    },
    toggleTodo: todoId => {
      setTodos(todos.map(todo => (todo.id === todoId) && {...todo, completed: !todo.completed} || todo))  // easy flip with '!'; messing big time with logical ops - hahahaha!
    },
    editTodo: (todoId, newTask) => {
      setTodos(
        todos.map(todo => todo.id === todoId ? {...todo, task: newTask} : todo)          
      )
    }    
  };
};

