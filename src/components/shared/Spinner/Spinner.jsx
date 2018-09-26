import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.sass';

const Spinner = ({ className }) => (
  <div className={`${styles.container} ${className}`}>
    <span className={`${styles.ring} ${styles.ring1}`} />
    <span className={`${styles.ring} ${styles.ring2}`} />
  </div>
);

Spinner.defaultProps = {
  className: '',
};

Spinner.propTypes = {
  className: PropTypes.string,
};


export default Spinner;
