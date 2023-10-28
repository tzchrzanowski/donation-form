export interface dateMonthAndYear {
    month: String,
    year: number,
}

/*
* Function that returns current date month in format "Month 2024"
*/
export function getCurrentDateMonth(): dateMonthAndYear {
    const currentDate = new Date();
    const onlyMonthAsCaptionOption = { month: 'long' };

    // @ts-ignore
    const formattedMonth = new Intl.DateTimeFormat('en-US', onlyMonthAsCaptionOption).format(currentDate);

    return {month: formattedMonth, year: currentDate.getFullYear()}
}
