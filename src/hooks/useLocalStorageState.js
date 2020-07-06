// Video 260 making a 3rd hook
//What this lecture is good for: making a hook that is persistent on a setting for the App, for example language setting, dark or light mode, color scheme and other 'preferences'.
//Watch again and perhaps make one of these, but don't overcomplicate the initializing of todos by exporting them !!

// ie. this is not in use; delete it!

import { useState, useEffect } from 'react';

const useLocalStorageState = (key, defaultVal) => {
  // make piece of state based on value in localstorage (or default)
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
    }
    catch (e) {
       val = defaultVal
      }
    return val;
  });

  // use useEffect() to update local storage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState]

};

export default useLocalStorageState;


