//import ReactDOM from 'react-dom';
//import App from './App';

//I commented below

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


//it('renders without crashing', () => {
//    const div = document.createElement('div');
//    ReactDOM.render(<App />, div);
//    ReactDOM.unmountComponentAtNode(div);
//});
//
//it('renders without crashing', () => {
//    const div = document.createElement('div');
//    ReactDOM.render(<App />, div);
//    ReactDOM.unmountComponentAtNode(div);
//});

