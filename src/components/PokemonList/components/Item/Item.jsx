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
  children,
  handleModal,
}) => (
  <li id={id} className={`${styles.container} ${bs.card}`}>
    <a href={children ? '/#' : `#${name}`} className={styles.img} onClick={() => handleModal(id)}>
      <img className={`${bs['card-img-top']}`} src={img} alt={name} />
    </a>
    <div className={`${styles.body} ${bs['card-body']}`}>
      <h5 className={`${styles.title} ${bs['card-title']}`}>{`#${num} ${name}`}</h5>
      <ul className={styles.types}>
        {type.map(item => <Type key={item} type={item} />)}
      </ul>
    </div>
    {children && (
      <div className={bs['card-footer']}>
        {children}
      </div>
    )}
  </li>
);

PokemonItem.defaultProps = {
  id: null,
  img: '/placeholder.jpg',
  num: 'No number',
  name: 'No name',
  type: [],
  children: null,
  handleModal: () => null,
};

PokemonItem.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  num: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  handleModal: PropTypes.func,
};

export default PokemonItem;
