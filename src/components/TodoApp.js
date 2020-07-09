import React from 'react';
import {
    Typography,
    Paper,
    AppBar,
    Toolbar,
    Grid
} from '@material-ui/core';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
// this has been passed into todos.context.js
// import useTodoState from '../hooks/useTodoState'; // custom hook
import { TodosProvider } from '../context/todos.context'; // context for all Todos functionality


const TodoApp = () => {
    // const initialTodos = JSON.parse(window.localStorage.getItem('todos')) // load up local storage into the app
    
    // to be removed since logic is passed via todos.context and not props anymore
    // const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos); // import all todo functionality and initial state of todos
    
    // update localStorage when todos change
    // useEffect(() => window.localStorage.setItem('todos', JSON.stringify(todos)), [todos]);  // [todos] = which pieces of state to monitor change of
    
     // some generic data
    // const initialTodos = [
    //     { id: uuid(), task: "Clean Fishtank", completed: true, index: 1 },
    //     { id: uuid(), task: "Wash Car", completed: true, index: 2 },
    //     { id: uuid(), task: "Grow Beard", completed: false, index: 3 },
    //     { id: uuid(), task: "Go shopping for Tina", completed: false, index: 4 },        
    // ]
      
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                background: "#fbfbfb"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }} >
                <Toolbar>
                    <Typography color="inherit">TODAY TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>  
            <Grid container justify="center" style={{ marginTop: '2rem'}} >
              <Grid item xs={11} md={9} lg={7}>
                <TodosProvider>
                  <TodoForm />
                  <TodoList />
                </TodosProvider>
              </Grid>                              
            </Grid>            
        </Paper>
    );
}
export default TodoApp;