import React from 'react';
import { useReducerWithMiddleware } from '@qccareerschool/hooks';

import { dispatchMiddleware, reducer, initialState, State, Action } from '../state';

export type Callback<T> = (state: State) => T;
export type Selector<T> = (callback: Callback<T>) => T;

export const StateContext = React.createContext<State | undefined>(undefined);
export const DispatchContext = React.createContext<React.Dispatch<Action> | undefined>(undefined);

export const StateProvider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducerWithMiddleware(reducer, initialState, dispatchMiddleware);

  // const modifiedDispatch = useCallback(dispatchMiddleware(dispatch), [ dispatch ]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
          {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
