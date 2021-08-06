import { createContext, useState } from 'react'

export const CountriesContext = createContext([[], () => { }]);

export const CountriesProvider = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <CountriesContext.Provider value={[state, setState]}>
      { children }
    </CountriesContext.Provider>
  )
};