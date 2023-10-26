/*
* Function that formats number from 25000 to 25,000.00
*/
export function formatNumberWithTwoDecimalPlaces(number: number): string {
    const formattedNumber = parseFloat(number.toFixed(2));

    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(formattedNumber);
}
