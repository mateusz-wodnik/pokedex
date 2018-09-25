import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import styles from './PokemonList.sass';
import PokemonItem from './components/Item/Item';
import Modal from '../shared/Modal/Modal';
import Info from './components/Info/Info';


export class PokemonList extends Component {
  componentDidMount() {
    const { getListRequest } = this.props;
    getListRequest();
  }

  render() {
    const {
      items,
      modal,
      showModal,
      hideModal,
    } = this.props;

    const handleModal = () => {
      if (modal) {
        const pokemon = items.find(item => item.id === modal);
        return (
          <Modal hideModal={hideModal} link={`/#${modal}`}>
            <PokemonItem {...pokemon} handleModal={hideModal}>
              <Info {...pokemon} />
            </PokemonItem>
          </Modal>
        );
      }
      return null;
    };

    return (
      <Fragment>
        <ul className={`${styles.container}`}>
          {items.map(item => (
            <PokemonItem key={item.id + item.name} {...item} handleModal={showModal} />
          ))}
        </ul>
        {handleModal()}
      </Fragment>
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
