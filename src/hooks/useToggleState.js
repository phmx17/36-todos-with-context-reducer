// toggles a piece of state between true or false
// used here for editing mode on or off in Todo.js
// if no value is passed then it is false by default

import { useState } from 'react';

const useToggleState = (initialVal = false) => {
  const [state, setState] = useState(initialVal); //  'state' name is completely arbitrary
  const toggleState = () => setState(!state);  
  return [state, toggleState]
}
export default useToggleState;
