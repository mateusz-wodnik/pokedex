import React from 'react';
import { shallow } from 'enzyme';
import PokemonList from './PokemonList';

describe('Pokemon list component', () => {
  const items = [];
  let wrapper;

  it('is empty if props is not provided', () => {
    expect(wrapper.isEmpty()).toEqual(true);
  });

  beforeEach(() => {
    wrapper = shallow(<PokemonList items={items} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains pokemons list', () => {
    expect(wrapper).toHaveLength(items.length);
  });

  it('contains pokemon items', () => {
    expect(wrapper.contains('Pokemon')).toEqual(true);
  });
});
