export const ADD_POKEMON_LIST = 'ADD_POKEMON_LIST';
export const FAILED_POKEMON_LIST = 'FAILED_POKEMON_LIST';
export const LOADING_POKEMON_LIST = 'LOADING_POKEMON_LIST';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const ADD_PAGE = 'ADD_PAGE';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const createList = items => ({
  type: ADD_POKEMON_LIST,
  items,
});

export const itemsHasErrored = bool => ({
  type: FAILED_POKEMON_LIST,
  hasFailed: bool,
});

export const itemsIsLoading = bool => ({
  type: LOADING_POKEMON_LIST,
  isLoading: bool,
});

export const addPage = (page, ids) => ({
  type: ADD_PAGE,
  page,
  ids,
});

export const changePage = page => ({
  type: CHANGE_PAGE,
  page,
});

export function getListRequest(page, limit = 16) {
  return (dispatch) => {
    /* Reset error message on new request */
    dispatch(itemsHasErrored(false));
    /* Handle requests for pages lower than page index 1 */
    if (page < 1) return dispatch(itemsHasErrored('No more pokemons found'));
    dispatch(itemsIsLoading(true));
    return fetch(`/pokemons?_page=${page}&_limit=${limit}`)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        dispatch(itemsIsLoading(false));
        return res.json();
      })
      .then((pokemons) => {
        /* Handle requests for pages that returns no items */
        if (!pokemons.length) throw Error('No more pokemons found');
        /* Convert array to dictionary */
        function arrToDict(arr) {
          const dict = {};
          arr.forEach((item) => { dict[item.id] = item; });
          return dict;
        }
        const dict = arrToDict(pokemons);
        dispatch(createList(dict));
        const ids = pokemons.map(pokemon => pokemon.id);
        dispatch(addPage(page, ids));
        dispatch(changePage(page));
      })
      .catch(error => dispatch(itemsHasErrored(error.message)));
  };
}

export const showModal = id => ({
  type: SHOW_MODAL,
  id,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
