import React from 'react';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Item.sass';
import Type from '../../../shared/Type/Type';

const PokemonItem = ({
  id,
  img,
  num,
  name,
  type,
}) => (
  <li id={id} className={`${styles.container} ${bs.card}`}>
    <img className={`${styles.img} ${bs['card-img-top']}`} src={img} alt={name} />
    <div className={`${styles.body} ${bs['card-body']}`}>
      <h5 className={`${styles.title} ${bs['card-title']}`}>{`#${num} ${name}`}</h5>
      <ul className={styles.types}>
        {type.map(item => <Type key={item} type={item} />)}
      </ul>
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
  id: PropTypes.number,
  img: PropTypes.string,
  num: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.string),
};

export default PokemonItem;
