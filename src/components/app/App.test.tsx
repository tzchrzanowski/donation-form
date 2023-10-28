import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App page tests', () => {
  test('tests if top header and form components are present in application after app page render', () => {
    render(<App />);
    const topHeader = screen.getByTestId("app-id");
    const formComponent = screen.getByTestId("form-id");

    expect(topHeader).toBeInTheDocument();
    expect(formComponent).toBeInTheDocument();
  });
});

