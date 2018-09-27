import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from '../../../shared/Spinner/Spinner';
import debounce from '../../../../_utils/debounce';

class Pagination extends Component {
  componentDidUpdate(prevProps) {
    const { pages } = this.props;
    if (pages !== prevProps.pages) {
      this.handleExactPages();
    }
  }

  handleRequests = (value = 1, exact) => {
    const {
      pages,
      page,
      changePage,
      getListRequest,
    } = this.props;
    // Handle change to exact page or next / prev page
    const check = exact ? value : page + value;
    // Handle page to already fetched page
    if (pages[check]) {
      changePage(check);
      // Handle new fetch for a page
    } else {
      changePage(check);
      debounce(getListRequest, [check], 350);
    }
    return null;
  };

  handleExactPages = () => {
    const { pages } = this.props;
    // Get higher page index in case that some pages are missing thanks to debounced fetch for pages
    const max = Math.max(...Object.keys(pages));
    const items = [];
    // Populate items array with sequential values up to highest already fetched page index
    for (let i = 1; i <= max; i += 1) {
      items.push(i);
    }
    return items;
  };

  render() {
    const { isLoading, page } = this.props;
    return (
      <nav>
        <ul className={`${bs.pagination} ${bs['justify-content-center']}`}>
          <li className={`${bs['page-item']} ${page <= 1 && bs.disabled}`}>
            <button className={bs['page-link']} disabled={page <= 1} type="button" onClick={() => this.handleRequests(-1)}>Previous</button>
          </li>
          {this.handleExactPages().map(idx => (
            <li key={idx} className={bs['page-item']}>
              <button className={bs['page-link']} type="button" onClick={() => this.handleRequests(idx, true)}>{idx}</button>
            </li>
          ))}
          <li className={bs['page-item']}>
            <button className={bs['page-link']} type="button" onClick={() => this.handleRequests(1)}>Next</button>
          </li>
          {isLoading && (
            <li className={bs['page-item']}>
              <span className={bs['page-link']} style={{ height: '100%', width: '50px' }}>
                <Spinner />
              </span>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

Pagination.defaultProps = {
  pages: {},
  page: 1,
  getListRequest: () => null,
  changePage: () => null,
  isLoading: false,
};

Pagination.propTypes = {
  pages: PropTypes.objectOf(PropTypes.array),
  page: PropTypes.number,
  getListRequest: PropTypes.func,
  changePage: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Pagination;
