export interface dateMonthAndYear {
    month: String,
    monthNumber: number,
    year: number,
    amountOfMonths: number,
}

/*
* Function that returns current date month in format "Month 2024"
*/
export function getCurrentDateMonth(): dateMonthAndYear {
    const currentDate = new Date();
    const currentMonthAsNumber = currentDate.getMonth()+1;
    const formattedMonth = getMonthName(currentMonthAsNumber);

    return {
        month: formattedMonth,
        year: currentDate.getFullYear(),
        monthNumber: currentMonthAsNumber,
        amountOfMonths: 1,
    };
}

/*
* Function that returns next month from provided month object:
* */
export function getNextMonth(month: dateMonthAndYear): dateMonthAndYear {
    const nextMonth = {...month};

    if (nextMonth.monthNumber == 12) {
        nextMonth.monthNumber = 1;
        nextMonth.year += 1;
    } else {
        nextMonth.monthNumber += 1;
    }
    nextMonth.amountOfMonths += 1;
    nextMonth.month = getMonthName(nextMonth.monthNumber);
    return nextMonth;
}

/*
* Function that returns previous month from provided month object:
* */
export function getPreviousMonth(month: dateMonthAndYear): dateMonthAndYear {
    const previousMonth = {...month};
    const currentDate = getCurrentDateMonth();

    if(month.monthNumber == 1) {
        previousMonth.monthNumber = 12;
    } else {
        previousMonth.monthNumber = month.monthNumber -1;
    }

    if (previousMonth.monthNumber < currentDate.monthNumber && previousMonth.year == currentDate.year) {
        return month;
    }
    if (previousMonth.monthNumber == 12) {
        previousMonth.year -= 1;
    }
    previousMonth.month = getMonthName(previousMonth.monthNumber);
    previousMonth.amountOfMonths -= 1;
    return previousMonth;
}

/*
* Function returns month name in form of string
* */
function getMonthName(monthNumber: number) {
    // @ts-ignore
    const date = new Date(null, monthNumber - 1);
    return date.toLocaleString('default', { month: 'long' });
}
