import React, { useReducer } from 'react';

import { reducer, initialState, State, Action } from '../state';

export const StateContext = React.createContext<State | undefined>(undefined);
export const DispatchContext = React.createContext<React.Dispatch<Action> | undefined>(undefined);

export const StateProvider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
       {children}
     </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
