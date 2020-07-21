import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Testing', function(){
  test('Test for checking title rendering or not', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Currency Converter API');
    expect(linkElement).toBeInTheDocument();
  });
})

