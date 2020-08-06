import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import landing from './landing';

describe('<landing />', () => {
  test('it should mount', () => {
    render(<landing />);
    
    const landing = screen.getByTestId('landing');

    expect(landing).toBeInTheDocument();
  });
});