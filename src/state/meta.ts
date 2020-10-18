export type MetaState = {
  student: boolean;
};

export type MetaAction =
  | { type: 'SET_STUDENT'; payload: boolean };

export const initialMetaState: MetaState = {
  student: false,
};

export function metaReducer(state: MetaState, action: MetaAction): MetaState {
  switch (action.type) {
    case 'SET_STUDENT':
      return {
        ...state,
        student: action.payload,
      };
    default:
      return state;
  }
}
