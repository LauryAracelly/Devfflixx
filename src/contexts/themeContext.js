import { createContext, useState, useContext } from 'react';

const themeContext = createContext(false);

function useTheme() {
  return useContext(themeContext)
}

function ThemeProvider({ children }) {
  const [ toggle, setToggle ] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <themeContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </themeContext.Provider>
  );
}

export { useTheme, ThemeProvider };