import React from 'react';
import PropTypes from 'prop-types';
import mock from './mock.data.json';
import styles from './PokemonList.sass';
import PokemonItem from './components/Item/Item';


const PokemonList = ({ items }) => (
  <ul className={`${styles.container}`}>
    {items.map(item => <PokemonItem key={item.id + item.name} {...item} />)}
  </ul>
);

PokemonList.defaultProps = {
  items: mock || [],
};

PokemonList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonList;
