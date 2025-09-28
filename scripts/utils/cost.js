export function formatCurrency(costInCent) {
  return (Math.round(costInCent) / 100).toFixed(2);
}

export default formatCurrency;
