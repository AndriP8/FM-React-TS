export const initialValue = {
  count: 0,
  draftCount: 0,
};

type State = {
  count: number;
  draftCount: number;
};

type Action =
  | { type: 'INITIAL' }
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'UPDATE'; draftCount: number }
  | { type: 'SET_COUNT' };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INITIAL':
      return state;
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
      };
    case 'UPDATE':
      return {
        ...state,
        draftCount: action.draftCount,
      };
    case 'SET_COUNT':
      return {
        ...state,
        count: state.draftCount,
      };
    default:
      return state;
  }
};
