import React from 'react';
import { render, fireEvent, screen, getByRole } from '@testing-library/react';
import CurrencyInput from './CurrencyInput';

const mockOnChange = jest.fn();

/*
* Rendering CurrencyInput component
* */
test('Rendering CurrencyInput component', () => {
    render(
        <CurrencyInput value={0} onChange={mockOnChange} />
    );
    const inputElement = screen.getByRole('inputAmount');
    expect(inputElement).toBeInTheDocument();
});


/*
* Checking if valid input number is being saved in field
* */
test('Checking if valid input number is being saved in field', () => {
    let updatedValue = 0;
    render(
        <CurrencyInput value={0} onChange={(value) => (updatedValue = value)} />
    );
    const inputElement = screen.getByRole('inputAmount');
    fireEvent.change(inputElement, { target: { value: 1234 } });
    expect(updatedValue).toBe(1234);
});

/*
* Checking if invalid input string text is being ignored as intended:
* */
test('Checking if invalid input string text is being ignored as intended', () => {
    let updatedValue = 0;
    render(
        <CurrencyInput value={0} onChange={(value) => (updatedValue = value)} />
    );
    const inputElement = screen.getByRole('inputAmount');
    fireEvent.change(inputElement, { target: { value: "qwerty" } });
    expect(updatedValue).toBe(NaN);
});
