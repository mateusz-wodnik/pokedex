import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains pokemons list', () => {
    expect(wrapper.find('PokemonList')).toHaveLength(1);
  });
});
