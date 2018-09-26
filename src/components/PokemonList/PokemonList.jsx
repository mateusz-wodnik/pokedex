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
      changePage,
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
        <Pagination
          pages={pages}
          page={page}
          getListRequest={getListRequest}
          changePage={changePage}
        />
        <ul className={`${styles.container}`}>
          {pages[page] && items.filter(item => pages[page].includes(item.id)).map(item => (
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
  changePage: () => null,
  pages: {},
  page: 1,
  limit: 16,
};

PokemonList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  getListRequest: PropTypes.func,
  changePage: PropTypes.func,
  pages: PropTypes.objectOf(PropTypes.array),
  page: PropTypes.number,
  limit: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    ...state.pokemons,
    items: Object.values(state.pokemons.items),
  };
}

export default connect(mapStateToProps, { ...actions })(PokemonList);
