import React from 'react';
import PropTypes from 'prop-types';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Item.sass';


const PokemonItem = ({ item }) => (
  <li className={`${styles.container}`}></li>
);

PokemonItem.defaultProps = {
  item: {},
};

PokemonItem.propTypes = {
  item: PropTypes.object,
};

export default PokemonItem;
