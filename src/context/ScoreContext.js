import { createContext, useState } from 'react'

export const ScoreContext = createContext([[], () => { }]);

export const ScoreProvider = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <ScoreContext.Provider value={[state, setState]}>
      { children }
    </ScoreContext.Provider>
  )
};