import React from 'react';
import { shallow } from 'enzyme';
import LazyImg from './LazyImg';

describe('LazyImg component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LazyImg />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
