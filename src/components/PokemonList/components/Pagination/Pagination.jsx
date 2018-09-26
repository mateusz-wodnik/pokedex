import React from 'react';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({ page, getListRequest }) => (
  <nav aria-label="...">
    <ul className={bs.pagination}>
      <li className={bs['page-item']}>
        <button className={bs['page-link']} type="button" onClick={() => getListRequest(page - 1)}>Previous</button>
      </li>
      <li className={bs['page-item']}>
        <button className={bs['page-link']} type="button" onClick={() => getListRequest(page + 1)}>Next</button>
      </li>
    </ul>
  </nav>
);

Pagination.defaultProps = {
  page: 1,
  getListRequest: () => null,
};

Pagination.propTypes = {
  page: PropTypes.number,
  getListRequest: PropTypes.func,
};

export default Pagination;
