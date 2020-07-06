import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel'  // no destructuring allowed;
import useInputState from '../hooks/useInputState';

const EditTodoForm = (props) => {
  const [value, handleChange, reset] = useInputState(props.task); // passing values and function from hook component  
  
  const submitForm = (e) => {
    e.preventDefault();
    props.editTodo(props.id, value);      
    reset();
    props.toggleEdit(false);
  }

  return (
    <form onSubmit={
      (e) => submitForm(e)} 
      style={{
        marginLeft: '1rem', 
        marginTop: '-0.5rem', 
        width: '80%'}}
    >
      <TextField 
        margin='normal'
        value={value} 
        onChange={handleChange}
        // fullWidth // make underline go all the way across          
        autoFocus // prevent having to click into the field            
      />

      <IconButton onClick={() => props.toggleEdit(false)} style={{ display: 'inline-block' }} >
        <CancelIcon />
      </IconButton>

    </form>
  )
}
export default EditTodoForm;
