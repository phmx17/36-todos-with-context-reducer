import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
import { TodosContext } from '../context/todos.context';

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  if (todos.length) // check if non-zero todos, which otherwise renders an ugly empty list
    return (
      <Paper>
        <List>
          {todos.slice(0).reverse().map((todo, i) => (  // .slice(0) returns a fresh copy instead of overwriting original
            <>  {/* neat trick to avoid jsx complaining about sibling components */}
              <Todo                 
                {...todo} // passes id, task and completed; very kewl
                key={todo.id}                 
              />
              {i < todos.length -1 && <Divider />} {/* Divider while index is smaller than length of array; removes ugly display when zero todos */}              
            </> 
          ))}
        </List>
      </Paper>
    )  
    return null;  // if jsx above does not render
    
}
export default TodoList;