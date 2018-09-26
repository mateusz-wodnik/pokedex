import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import styles from './PokemonList.sass';
import PokemonItem from './components/Item/Item';
import Modal from '../shared/Modal/Modal';
import Info from './components/Info/Info';
import Pagination from './components/Pagination/Pagination';

export class PokemonList extends Component {
  componentDidMount() {
    const { getListRequest, page } = this.props;
    getListRequest(page);
  }

  render() {
    const {
      items,
      pages,
      page,
      modal,
      showModal,
      hideModal,
      getListRequest,
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
        <Pagination page={page} getListRequest={getListRequest} />
        <ul className={`${styles.container}`}>
          {items.filter(item => (
            pages[page] && pages[page].includes(item.id)
          )).map(item => (
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
  pages: {},
  page: 1,
  limit: 16,
};

PokemonList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  getListRequest: PropTypes.func,
  pages: PropTypes.objectOf(PropTypes.array),
  page: PropTypes.number,
  limit: PropTypes.number,
};

function mapStateToProps(state) {
  return { ...state.pokemons };
}

export default connect(mapStateToProps, { ...actions })(PokemonList);
