//  example of a reducer
import React, { useReducer } from 'react';

export default () => {

  // defining my reducer
  const myReducer = (state, action) => {
    switch (action.xtype) {
      case 'INCREMENT': return {count: state.count + action.xamount};
      case 'DECREMENT': return {count: state.count + action.xamount};
      case 'TAKEFIVE': return {count: state.count + action.xamount};
      case 'RESET' : return {count: 0};
      default: return state;    
    }
  }
  // the mother ship:
  const [state, dispatch] = useReducer(myReducer, {count: 10});

  // simple render; 'xtype' and 'xamount' are arbitrary but must match in 'myReducer'
  return (
    <div>
      <button onClick={() => dispatch({ xtype: 'INCREMENT', xamount: 1 })} >Add One</button>
      <button onClick={() => dispatch({ xtype: 'DECREMENT', xamount: 1.5 })} >Add One point Five</button>
      <button onClick={() => dispatch({ xtype: 'TAKEFIVE', xamount: -5 })} >Take Five</button>
      <button onClick={() => dispatch({ xtype: 'RESET'})} >RESET</button>


      <h3>{state.count}</h3>
    </div>
  );
};