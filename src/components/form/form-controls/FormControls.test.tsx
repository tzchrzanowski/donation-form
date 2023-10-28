import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormControls from './FormControls';

describe('Form Controls buttons tests:', () => {
    const handleSubmitMock = jest.fn();
    const handleCancelMock = jest.fn();

    test('test that handleCancel is called and that it does not call the submit function when the cancel button is clicked', () => {
        render(<FormControls handleSubmit={handleSubmitMock} handleCancel={handleCancelMock} />);
        const cancelButton = screen.getByTestId("cancel-button");
        fireEvent.click(cancelButton);

        expect(handleCancelMock).toHaveBeenCalled();
        expect(handleSubmitMock).not.toHaveBeenCalled();
    });
});
