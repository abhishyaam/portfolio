import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Photography from './Photography';

describe('<Photography />', () => {
  test('it should mount', () => {
    render(<Photography />);
    
    const photography = screen.getByTestId('Photography');

    expect(photography).toBeInTheDocument();
  });
});