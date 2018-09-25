import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.sass';

export const Modal = ({ children }) => (
  <aside className={styles.container}>
    {children}
  </aside>
);

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
