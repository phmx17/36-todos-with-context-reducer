import React from 'react';
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

import useToggleState from '../hooks/useToggleState'; // custom hook import
import EditTodoForm from './EditTodoForm';

const Todo = props => {  
  const [isEditing, toggleEdit] = useToggleState(false); // default in hook is defined as 'false', so setting it here is redundant, but for clarity 

  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? (
        <EditTodoForm 
          task={props.task} 
          id={props.id} 
          editTodo={props.editTodo}
          toggleEdit={toggleEdit}
          />
      ) : (
        <>
        <Checkbox checked={props.completed} onClick={() => props.toggleTodo(props.id)} /> {/* toggle completed or not */ }
        <ListItemText style={{ textDecoration: props.completed && 'line-through' }}>{props.task}</ListItemText>
        <ListItemSecondaryAction>

          <IconButton onClick={() => props.removeTodo(props.id)} aria-label="Delete">  {/* onClick() cannot be in child DeleteIcon !! */}
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
