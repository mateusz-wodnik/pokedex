import React from 'react';
import { hot } from 'react-hot-loader'; // eslint-disable-line
import bs from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './App.sass';


const App = () => (
  <div className={`${bs.container} ${styles.container}`}>
    React App
    <button type="button" className={`${bs.btn} ${bs['btn-primary']}`}>eleoeleoeeoeol</button>
  </div>
);

export default hot(module)(App); // eslint-disable-line
