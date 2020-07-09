import React, { useContext } from 'react';
import { 
  ListItem, 
  ListItemText, 
  Checkbox,
  ListItemSecondaryAction,
  IconButton
} 
from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'  // no destructuring allowed;
import EditIcon from '@material-ui/icons/Edit'  // no destructuring allowed;

import useToggleState from '../hooks/useToggleState'; // custom hook to toggle something on / off; here used for "is editing" flag
import EditTodoForm from './EditTodoForm';
import { TodosContext } from '../context/todos.context';

const Todo = props => {  

  const [isEditing, toggleEdit] = useToggleState(false); // default in hook is defined as 'false', so setting it here is redundant, but for clarity 
  // const { toggleTodo, removeTodo } = useContext(TodosContext); // using reducer inside context now
  const { dispatch } = useContext(TodosContext);
  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? (
        <EditTodoForm 
          task={props.task} 
          id={props.id}           
          toggleEdit={toggleEdit}
          />
      ) : (
        <>
        <Checkbox checked={props.completed} onClick={() => dispatch({ type: 'TOGGLE', id: props.id})} /> {/* toggle completed or not */ }
        <ListItemText style={{ textDecoration: props.completed && 'line-through' }}>{props.task}</ListItemText>
        <ListItemSecondaryAction>

          <IconButton onClick={() => dispatch({ type: 'REMOVE', id: props.id })} aria-label="Delete">  {/* onClick() cannot be in child DeleteIcon !! */}
            <DeleteIcon /> 
          </IconButton>
          
          <IconButton onClick={toggleEdit} aria-label="Edit">  {/* screen reader friendly */}
            <EditIcon /> 
          </IconButton>

        </ListItemSecondaryAction>
        </>
        )
      }
    </ListItem>
    )
  
}
export default Todo;
