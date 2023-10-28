import React from 'react';
import { render, screen } from '@testing-library/react';
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
});
