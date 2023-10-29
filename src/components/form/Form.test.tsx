import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Form from 'components/form/Form';

describe('Form main container tests', () => {

    test('test if form after render contains all the components:', () => {
        render(<Form windowWidth={900} />);
        const formHeader = screen.getByTestId('form-header');
        const formSummary = screen.getByTestId('form-summary');
        const formControls = screen.getByTestId('form-controls');

        expect(formHeader).toBeInTheDocument();
        expect(formSummary).toBeInTheDocument();
        expect(formControls).toBeInTheDocument();
    });

    test('test if form updates total amount after increase month click:', () => {
        render(<Form windowWidth={900} />);
        const displayValueBlock = screen.getByTestId('display-value');
        fireEvent.click(displayValueBlock);
        const inputBox = screen.getByTestId('input-box-id');
        fireEvent.focus(inputBox);
        fireEvent.change(inputBox, { target: { value: 300 } });
        const increaseMonthButton = screen.getByTestId('increase-id');
        fireEvent.click(increaseMonthButton);
        const totalAmount = screen.getByTestId('total-value-id');
        const everyMonthAmount = screen.getByTestId('every-month-amount-id');

        expect(everyMonthAmount).toHaveTextContent("$ 300.00");
        expect(totalAmount).toHaveTextContent("$600.00");
    });
});
