import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import styles from './PokemonList.sass';
import PokemonItem from './components/Item/Item';
import Info from './components/Info/Info';
import Pagination from './components/Pagination/Pagination';
import Modal from '../shared/Modal/Modal';
import Error from '../shared/Error/Error';

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
      hasFailed,
      itemsHasErrored,
      isLoading,
    } = this.props;
    return (
      <main className={styles.container}>
        <Pagination
          pages={pages}
          page={page}
          getListRequest={getListRequest}
          changePage={changePage}
          isLoading={isLoading}
        />
        <ul className={`${styles.list}`}>
          {pages[page] && Object.values(items).filter(item => (
            pages[page].includes(item.id))).map(item => (
              <PokemonItem key={item.id + item.name} {...item} handleModal={showModal} />
          ))}
        </ul>
        {modal && (
          <Modal hideModal={hideModal} link={`/#${modal}`}>
            <PokemonItem {...items[modal]} handleModal={hideModal}>
              <Info {...items[modal]} />
            </PokemonItem>
          </Modal>
        )}
        {hasFailed && (
          <Modal hideModal={() => {
            const pagesIdx = Object.keys(pages);
            changePage(page < 1 ? page + 1 : Number(pagesIdx.pop()));
            itemsHasErrored(false);
          }}
          >
            <Error message={hasFailed} />
          </Modal>
        )}
        <Pagination
          pages={pages}
          page={page}
          getListRequest={getListRequest}
          changePage={changePage}
          isLoading={isLoading}
        />
      </main>
    );
  }
}

PokemonList.defaultProps = {
  items: {},
  getListRequest: () => [],
  changePage: () => null,
  pages: {},
  page: 1,
  limit: 16,
  hasFailed: false,
  itemsHasErrored: () => false,
  isLoading: false,
};

PokemonList.propTypes = {
  items: PropTypes.objectOf(PropTypes.object),
  getListRequest: PropTypes.func,
  changePage: PropTypes.func,
  pages: PropTypes.objectOf(PropTypes.array),
  page: PropTypes.number,
  limit: PropTypes.number,
  hasFailed: PropTypes.string,
  itemsHasErrored: PropTypes.func,
  isLoading: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    ...state.pokemons,
  };
}

export default connect(mapStateToProps, { ...actions })(PokemonList);
