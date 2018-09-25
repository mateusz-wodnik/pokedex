import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import styles from './PokemonList.sass';
import PokemonItem from './components/Item/Item';


export class PokemonList extends Component {
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
  items: [],
  getListRequest: () => [],
};

PokemonList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  getListRequest: PropTypes.func,
};

function mapStateToProps(state) {
  return { ...state.pokemons };
}

export default connect(mapStateToProps, { ...actions })(PokemonList);
