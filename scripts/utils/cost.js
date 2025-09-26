export function formatCurrency(costInCent) {
  return (costInCent / 100).toFixed(2);
}

export default formatCurrency;
