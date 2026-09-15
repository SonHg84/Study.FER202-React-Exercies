import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Exercise from './Slot1/Ex4/Exercise';
import ListOfRetail from './Slot1/Ex4/UsingES6&JSX'
import reportWebVitals from './reportWebVitals';
import MyComponent from './test'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Exercise/>
  <ListOfRetail/>
  <MyComponent/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
