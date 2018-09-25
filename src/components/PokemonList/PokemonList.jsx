import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import mock from './mock.data.json';
import styles from './PokemonList.sass';
import PokemonItem from './components/Item/Item';


class PokemonList extends Component {
  componentDidMount() {
    const { getListRequest } = this.props;
    getListRequest();
  }

  render() {
    const { items } = this.props;
    return (
      <ul className={`${styles.container}`}>
        {items.map(item => (
          <PokemonItem key={item.id + item.name} {...item} />
        ))}
      </ul>
    );
  }
}

PokemonList.defaultProps = {
  items: mock || [],
};

PokemonList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps, { ...actions })(PokemonList);
