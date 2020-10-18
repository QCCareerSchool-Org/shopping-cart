export function formatCurrency(amount: number, precision = 2) {
  if (Math.round(amount) === amount) {
    return amount.toString();
  }
  return amount.toFixed(precision);
}
