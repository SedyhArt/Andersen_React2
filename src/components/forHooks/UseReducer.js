import React from "react";

const initialState = {fontSize: 24};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {fontSize: state.fontSize + 1};
    case 'decrement':
      return {fontSize: state.fontSize - 1};
    default:
      throw new Error();
  }
}

const  Counter = () => {


  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <h3>Font-size: ' {state.fontSize} '</h3>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <p style={{fontSize: state.fontSize}}>Some Text</p>
    </>
  );
}

export default Counter;