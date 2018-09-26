import React from 'react';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import img from './error.png';

const Error = ({ message }) => (
  <aside className={bs.card}>
    <img src={img} alt="Error" className={bs['card-img-top']} />
    <div className={bs['card-body']}>
      <h2 className={bs['card-title']}>Error</h2>
      <p className={bs['card-text']}>{message}</p>
    </div>
  </aside>
);


Error.defaultProps = {
  message: 'No message',
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
