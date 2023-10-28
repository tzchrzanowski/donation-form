import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormControls from './FormControls';

describe('Form Controls buttons tests:', () => {
    const handleCancelMock = jest.fn();

    test('test that handleCancel is called cancel button is clicked', () => {
        render(<FormControls handleCancel={handleCancelMock} windowWidth={900}/>);
        const cancelButton = screen.getByTestId("cancel-button");
        fireEvent.click(cancelButton);

        expect(handleCancelMock).toHaveBeenCalled();
    });
});
