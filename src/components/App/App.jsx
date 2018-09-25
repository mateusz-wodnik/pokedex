import React from 'react';
import { hot } from 'react-hot-loader'; // eslint-disable-line
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.sass';
import PokemonList from '../PokemonList/PokemonList';


const App = () => (
  <div className={`${bs.container} ${styles.container}`}>
    <PokemonList />
  </div>
);

export default hot(module)(App); // eslint-disable-line
