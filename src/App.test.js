import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('finds css modules classes', () => {
  const app = shallow(<App />);
  const res = app.find('.container');
  expect(res.text()).toContain('React App');
});
