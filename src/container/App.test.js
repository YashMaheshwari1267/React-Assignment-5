import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('rendering components',() => {
  it('should render the <App /> component',() => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  })

})