import React from 'react';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Item.sass';


const PokemonItem = ({
  id,
  img,
  num,
  name,
  type,
}) => (
  <li className={`${styles.container} ${bs.card}`}>
    <img className={bs['card-img-top']} src={img} alt={name} />
    <div className={bs['card-body']}>
      <h2 className={bs['card-title']}>{`#${num} ${name}`}</h2>
      <ul className={styles.types}></ul>
    </div>
  </li>
);

PokemonItem.defaultProps = {
  id: 'No id',
  img: '/placeholder.jpg',
  num: 'No number',
  name: 'No name',
  type: [],
};

PokemonItem.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  num: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonItem;
