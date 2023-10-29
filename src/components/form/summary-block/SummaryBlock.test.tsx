import React from 'react';
import { render, screen } from '@testing-library/react';
import SummaryBlock from './SummaryBlock';
import {dateMonthAndYear} from "utils/dateHelpers";

describe('Summary block tests:', () => {
    const dateObjectMock: dateMonthAndYear = {
        amountOfMonths: 2,
        month: "January",
        monthNumber: 1,
        year: 2024,
    }

    test('test that total value in rendered sumamry block is multiplied by two', () => {
        render(<SummaryBlock dateObject={dateObjectMock} donationPerMonthAmount={400}/>);
        const totalAmount = screen.getByTestId('total-value-id');

        expect(totalAmount).toHaveTextContent("$800.00");
    });

    test('test that checks that every month amount is displayed as intended', () => {
        render(<SummaryBlock dateObject={dateObjectMock} donationPerMonthAmount={400}/>);
        const everyMonthAmount = screen.getByTestId('every-month-amount-id');

        expect(everyMonthAmount).toHaveTextContent("$ 400.00");
    });

    test('test that checks that date is displayed as intended', () => {
        render(<SummaryBlock dateObject={dateObjectMock} donationPerMonthAmount={400}/>);
        const dateComponent = screen.getByTestId('date-id');

        expect(dateComponent).toHaveTextContent("January 2024");
    });
});
