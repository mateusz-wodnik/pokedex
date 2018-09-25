import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.sass';

export const Modal = ({ children, link, hideModal }) => (
  <aside className={styles.container}>
    <div className={styles.wrapper}>
      <a href={link} className={styles.close} onClick={hideModal}>✘</a>
      {children}
    </div>
  </aside>
);

Modal.defaultProps = {
  children: null,
  link: '/#',
  hideModal: () => null,
};

Modal.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  hideModal: PropTypes.func,
};

export default Modal;
