import React from 'react';
import { shallow } from 'enzyme';
import Type from './Type';

describe('Type component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Type />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
