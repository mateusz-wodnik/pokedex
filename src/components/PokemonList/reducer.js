import { combineReducers } from 'redux';
import { ADD_POKEMON_LIST, LOADING_POKEMON_LIST, FAILED_POKEMON_LIST } from './actions';

export const initialState = {
  pokemons: [],
  hasFailed: false,
  isLoading: false,
};

export function pokemons(state = initialState.pokemons, action) {
  switch (action.type) {
    case ADD_POKEMON_LIST:
      return [...state, ...action.pokemons];

    default:
      return state;
  }
}

export function hasFailed(state = initialState.hasFailed, action) {
  switch (action.type) {
    case FAILED_POKEMON_LIST:
      return action.hasFailed;

    default:
      return state;
  }
}

export function isLoading(state = initialState.isLoading, action) {
  switch (action.type) {
    case LOADING_POKEMON_LIST:
      return action.isLoading;

    default:
      return state;
  }
}

export default combineReducers({
  pokemons,
  hasFailed,
  isLoading,
});
