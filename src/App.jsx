import React from 'react';
import { hot } from 'react-hot-loader'; // eslint-disable-line
import styles from './App.sass';

const App = () => (
  <div className={styles.container}>
    React App
  </div>
);

export default hot(module)(App); // eslint-disable-line
