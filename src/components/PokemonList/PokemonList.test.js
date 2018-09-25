import React from 'react';
import { shallow } from 'enzyme';
import { PokemonList } from './PokemonList';
import mock from './mock.data.json';

describe('Pokemon list component', () => {
  const items = mock;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PokemonList items={items} />);
  });

  it('is empty if props is not provided', () => {
    wrapper = shallow(<PokemonList />);
    expect(wrapper.exists('PokemonItem')).toEqual(false);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains right number of pokemon items', () => {
    expect(wrapper.find('PokemonItem')).toHaveLength(items.length);
  });
});
