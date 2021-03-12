import React, { useReducer } from "react";
import "./styles/app.css";

const initialState = 0;

const reducer = (state, action) => {
    if (action.type === 'INCREMENT') {
      return state + 1
    }
    if (action.type === 'DECREMENT') {
      return state - 1
    }
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const plusHandleClick = () => {
    dispatch({type: 'INCREMENT'})
  }   

  const minusHandleClick = () => {
    dispatch({type: 'DECREMENT'})
  } 

  return (
    <div className="usereducer">
      <div className="spave">
        <div className="number">
         {state}
        </div>
        <div className="work">
          <button onClick={plusHandleClick} className="plus">+</button>
          <button onClick={minusHandleClick} className="minus">-</button>
        </div>
      </div>
    </div>
  );
};

export default App;
