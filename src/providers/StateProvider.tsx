import React, { useReducer } from 'react';

import { reducer, initialState, State, Action } from '../state';

export type Callback<T> = (state: State) => T;
export type Selector<T> = (callback: Callback<T>) => T;

export const StateContext = React.createContext<State | undefined>(undefined);
export const DispatchContext = React.createContext<React.Dispatch<Action> | undefined>(undefined);
export const SelectorContext = React.createContext<Selector<any> | undefined>(undefined);

export const StateProvider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const selector: Selector<any> = callback => callback(state);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <SelectorContext.Provider value={selector}>
          {children}
        </SelectorContext.Provider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
