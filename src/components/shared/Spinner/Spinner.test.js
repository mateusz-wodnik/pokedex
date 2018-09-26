import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
