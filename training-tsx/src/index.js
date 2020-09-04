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
import SchoolForm from './SchoolForm';
import SchoolLogin from './SchoolLogin';
import Registration from './react-registration/registration';
import SampleHttp from './react-http/sample-http';
import Country from './react-http/country';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello name="Francis!" /> */}
    {/* <AgeCheck value="3" unit="yr"/> */}
    {/* <Train training="OurTraining"/> */}
    {/* <Clock /> */}
    {/* <AnagramChecker/> */}
    {/* <SchoolForm /> */}
    {/* <SchoolLogin /> */}
    {/* <Registration /> */}
    {/* <SampleHttp /> */}
    <Country />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
