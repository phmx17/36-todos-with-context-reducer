import { v4 as uuid } from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuid(), task: action.task, completed: false }];       
    case 'REMOVE':
      return  state.filter(todo => todo.id !== action.id);  // filter out removed todo; setTodos with new todos array
    case 'TOGGLE':
      return state.map(todo => (todo.id === action.id) && {...todo, completed: !todo.completed} || todo)  // easy flip with '!'; messing big time with logical ops - hahahaha!
    case 'EDIT':
      return state.map(todo => todo.id === action.id ? {...todo, task: action.newTask} : todo);
    default:
      return state
  }
};
export default reducer;

// {type: 'ADD', task: 'Walk the Dog'}
// {type: 'REMOVE', id : 123 }

  // addTodo: newTodoText => {
  //   setTodos([...todos, { id: uuid(), task: newTodoText, completed: false /*, index: todos[todos.length -1].index + 1 */ }]);   // adding index creates error when adding first todo manually  
  // },
  // removeTodo: todoId => {      
  //   setTodos(todos.filter(todo => todo.id !== todoId))  // filter out removed todo; setTodos with new todos array
  // },
  // toggleTodo: todoId => {
  //   setTodos(todos.map(todo => (todo.id === todoId) && {...todo, completed: !todo.completed} || todo))  // easy flip with '!'; messing big time with logical ops - hahahaha!
  // },
  // editTodo: (todoId, newTask) => {
  //   setTodos(todos.map(todo => todo.id === todoId ? {...todo, task: newTask} : todo)          
  //   )
  // };    

  /*, index: todos[todos.length -1].index + 1 */ // adding index creates error when adding first todo manually  