import React, { useContext } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel'  // no destructuring allowed;
import useInputState from '../hooks/useInputState';
import { TodosContext } from '../context/todos.context'; // using context now to pass all functionality to components

const EditTodoForm = ({ id, task, toggleEdit }) => {
  console.log(toggleEdit);
  const [value, handleChange, reset] = useInputState(task); // passing values and function from hook component  
  // const { editTodo } = useContext(TodosContext); // using reducer inside context now
  const { dispatch } = useContext(TodosContext);
  const submitForm = (e) => {
    e.preventDefault();
    dispatch({ type: 'EDIT', id: id, newTask: value });      
    reset();
    toggleEdit(false);
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

      <IconButton onClick={() => toggleEdit(false)} style={{ display: 'inline-block' }} >
        <CancelIcon />
      </IconButton>

    </form>
  )
}
export default EditTodoForm;
