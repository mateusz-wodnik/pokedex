import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Error />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
