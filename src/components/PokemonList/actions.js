export const ADD_POKEMON_LIST = 'ADD_POKEMON_LIST';
export const FAILED_POKEMON_LIST = 'FAILED_POKEMON_LIST';
export const LOADING_POKEMON_LIST = 'LOADING_POKEMON_LIST';

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

export function getListRequest(query = '') {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    return fetch(`/pokemons${query}`)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        dispatch(itemsIsLoading(false));
        return res.json();
      })
      .then(pokemons => dispatch(createList(pokemons)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
