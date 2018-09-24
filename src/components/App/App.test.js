import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('contains pokemons list', () => {
    expect(wrapper.find('PokemonList')).to.equal(true);
  });
});
