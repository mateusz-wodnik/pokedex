import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.sass';

const Loader = ({ className }) => (
  <div className={`${styles.container} ${className}`}>
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.dot} />
  </div>
);

Loader.defaultProps = {
  className: '',
};

Loader.propTypes = {
  className: PropTypes.string,
};
export default Loader;
