import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './LazyImg.sass';
// import Spinner from '../Spinner/Spinner';
import Loader from '../Loader/Loader';

class LazyImg extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    /* Show initial loader after some time to prevent loader flash when image is quickly loaded */
    this.timeOut = setTimeout(() => this.setState({ loading: true }), 50);
  }

  handleLoad = (e) => {
    clearTimeout(this.timeOut);
    this.setState({ loading: false });
    e.target.style.opacity = 1;
    e.target.style.transform = 'translateY(0)';
  };

  handleError = (e) => {
    clearTimeout(this.timeOut);
    this.setState({ loading: false });
    e.target.alt = 'No book cover';
    e.target.style.opacity = 1;
  };

  render() {
    const { src, alt, className } = this.props;
    const { loading } = this.state;
    return (
      <Fragment>
        {loading && src && <Loader className={className} />}
        {src ? (
          <img
            src={src}
            alt={alt}
            onLoad={this.handleLoad}
            onError={this.handleError}
            style={{ transform: 'translateY(-100%)', opacity: 0, transition: '1s' }}
            className={className}
          />
        ) : <div className={styles.container}>{alt}</div>
        }
      </Fragment>
    );
  }
}

LazyImg.defaultProps = {
  src: '/placeholder.jpg',
  alt: 'No image',
  className: '',
};

LazyImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};


export default LazyImg;
