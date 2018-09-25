import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../mock.data.json';
import Info from './Info';

describe('Pokemon item component', () => {
  const item = mock[0];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Info {...item} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
