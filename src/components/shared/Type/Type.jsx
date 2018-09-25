import React from 'react';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Type.sass';

const Type = ({ type }) => (
  <li className={`${styles.container} ${bs.badge}`} style={{ background: `var(--${type.toLowerCase()})` }}>{type}</li>
);

Type.defaultProps = {
  type: 'noType',
};

Type.propTypes = {
  type: PropTypes.string,
};

export default Type;
