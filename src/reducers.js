import { combineReducers } from 'redux';
import pokemons from './components/PokemonList/reducer';

export default combineReducers({
  pokemons,
});
