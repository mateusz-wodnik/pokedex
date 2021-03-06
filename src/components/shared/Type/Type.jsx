import React from 'react';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Type.sass';

const Type = ({ type, style }) => (
  <span className={`${styles.container} ${bs.badge}`} style={{ background: `var(--${type.toLowerCase()})`, ...style }}>{type}</span>
);

Type.defaultProps = {
  type: 'noType',
  style: null,
};

Type.propTypes = {
  type: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

export default Type;
