import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('Modal component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Modal />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
