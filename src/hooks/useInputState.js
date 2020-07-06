// component for handling input; returns value and 2 common helper functions

import { useState } from 'react';

export default initialVal => {  // e not included!
  const [value, setValue] = useState (initialVal);
  
  // helper funcs
  const handleChange = e => {   // e gets passed even if not a paramater in the hook;
    setValue(e.target.value);   
  };
  const reset = () => {
    setValue('');
  }
  return [value, handleChange, reset]
}
