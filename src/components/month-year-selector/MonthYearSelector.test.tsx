import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MonthYearSelector from './MonthYearSelector';
import {getCurrentDateMonth, dateMonthAndYear} from "utils/dateHelpers";

describe('Month Year Selector block tests:', () => {
    let dateObjectMock: dateMonthAndYear = {
        amountOfMonths: 2,
        month: "January",
        monthNumber: 1,
        year: 2024,
    }
    let mockCurrentMonth: dateMonthAndYear = dateObjectMock;
    const mockFn = (dateObj: dateMonthAndYear) => {
        mockCurrentMonth = dateObj;
    };
    const emptyMockFn = jest.fn();

    test('test that function is being called on decrease button click', () => {
        render(<MonthYearSelector changeMonthCallback={emptyMockFn} currentFormattedDateObject={dateObjectMock} />);
        const decreaseButton = screen.getByTestId('decrease-id');
        fireEvent.click(decreaseButton);
        expect(emptyMockFn).toHaveBeenCalled();
    });

    test('test that function is being called on increase button click', () => {
        render(<MonthYearSelector changeMonthCallback={emptyMockFn} currentFormattedDateObject={dateObjectMock} />);
        const increaseButton = screen.getByTestId('increase-id');
        fireEvent.click(increaseButton);
        expect(emptyMockFn).toHaveBeenCalled();
    });

    test('test that month gets increased', () => {
        render(<MonthYearSelector changeMonthCallback={mockFn} currentFormattedDateObject={dateObjectMock} />);
        const increaseButton = screen.getByTestId('increase-id');
        fireEvent.click(increaseButton);
        expect(mockCurrentMonth.month).toEqual("February");
    });

    test('test that month can get decreased', () => {
        render(<MonthYearSelector changeMonthCallback={mockFn} currentFormattedDateObject={dateObjectMock} />);
        const decreaseButton = screen.getByTestId('decrease-id');
        fireEvent.click(decreaseButton);
        expect(mockCurrentMonth.month).toEqual("December");
    });
});
