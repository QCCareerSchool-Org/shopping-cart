export function formatCurrency(amount: number, precision = 2): string {
  if (Math.round(amount) === amount) {
    return amount.toString();
  }
  return amount.toFixed(precision);
}
