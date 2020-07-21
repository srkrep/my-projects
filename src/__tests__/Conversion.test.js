import React from 'react';
import { render } from '@testing-library/react';
import Conversion from '../components/Conversion';

describe('Conversion Component Testing', function(){
  test('Test for checking currency from', () => {
    const { getByText } = render(<Conversion/>);
    const linkElement = getByText('Currency From');
    expect(linkElement).toBeInTheDocument();
  });
})