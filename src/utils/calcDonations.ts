/*
* Function that calculate the total amount to be donated based on selected month and selected amount.
*/
export function calculateTotalDonationAmount(donationPerMonthAmount: number, amountOfMonths: number): number {
    return donationPerMonthAmount * amountOfMonths;
}
