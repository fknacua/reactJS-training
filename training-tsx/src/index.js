import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import AgeCheck from './AgeCheck';
import Train from './Train'
import Clock from './Clock'
import * as serviceWorker from './serviceWorker';
import AnagramChecker from './AnagramChecker';
import StudentForm from './StudentForm';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello name="Francis!" /> */}
    {/* <AgeCheck value="3" unit="yr"/> */}
    {/* <Train training="OurTraining"/> */}
    {/* <Clock /> */}
    {/* <AnagramChecker/> */}
    <StudentForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
