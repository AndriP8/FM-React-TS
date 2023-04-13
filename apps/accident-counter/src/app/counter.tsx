import React from 'react';
import { initialValue, reducer } from './reducer';

/* eslint-disable jsx-a11y/accessible-emoji */
const Counter = () => {
  // const [count, setCount] = React.useState(0);
  // const [draftCount, setDraftCount] = React.useState(0);

  const [state, dispatch] = React.useReducer(reducer, initialValue);

  // React.useEffect(() => {
  //   setDraftCount(count);
  // }, [count]);

  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{state.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          ➖ Decrement
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}>🔁 Reset</button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: 'SET_COUNT' });
          }}
        >
          <input
            type="number"
            value={state.draftCount}
            onChange={(e) =>
              dispatch({ type: 'UPDATE', draftCount: e.target.valueAsNumber })
            }
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
