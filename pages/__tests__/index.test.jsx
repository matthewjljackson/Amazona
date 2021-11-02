import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const divElement = screen.getByText(/products/i);
  });
});
