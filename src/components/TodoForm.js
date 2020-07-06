import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from '../hooks/useInputState';

const TodoForm = ({ addTodo }) => {   //instead of (props)
  const [value, handleChange, reset] = useInputState(''); // passing values and function from hook component
  return ( 
    <Paper style={{ margin: '2rem 0', padding: '0.5rem 1rem'}}>
      <form onSubmit={e=> {
        e.preventDefault();
        addTodo(value);
        reset();
      }} >
      <TextField 
        value={value} 
        onChange={handleChange}
        margin='normal'
        label='Add new Todo' 
        fullWidth // make underline go all the way across
      />
      </form>
    </Paper>
   );
}
 
export default TodoForm;