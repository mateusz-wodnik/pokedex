import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Pokemon item component', () => {
  const pages = 16;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Pagination pages={pages} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
