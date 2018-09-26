import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
