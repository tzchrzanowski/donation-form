import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormHeader from './FormHeader';

describe('Form Header tests:', () => {
    const handleCancelMock = jest.fn();

    test('test that handleCancel is called when cancel button is clicked', () => {
        render(<FormHeader handleCancelCallback={handleCancelMock} windowWidth={700}/>);
        const cancelXButton = screen.getByTestId("cancel-x-button");
        fireEvent.click(cancelXButton);

        expect(handleCancelMock).toHaveBeenCalled();
    });

    test('tests if form header renders with all elements components', () => {
        render(<FormHeader handleCancelCallback={handleCancelMock} windowWidth={700}/>);
        const formHeaderMainCaption = screen.getByTestId("form-header-main-caption-id");
        const formHeaderSubCaption = screen.getByTestId("form-header-sub-caption-id");
        const formHeaderIcon = screen.getByTestId("giving-icon-id");

        expect(formHeaderMainCaption).toBeInTheDocument();
        expect(formHeaderSubCaption).toBeInTheDocument();
        expect(formHeaderIcon).toBeInTheDocument();

    });
});
