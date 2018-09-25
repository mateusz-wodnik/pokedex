import React from 'react';
import { shallow } from 'enzyme';
import PokemonItem from './Item';
import mock from '../../mock.data.json';

describe('Pokemon item component', () => {
  const item = mock[0];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PokemonItem {...item} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains image', () => {
    expect(wrapper.exists('.img')).toEqual(true);
  });
});
