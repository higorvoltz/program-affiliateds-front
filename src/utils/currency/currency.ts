export function formatCurrency(value: number) {
  const remainingCents = value % 100;
  const currencyValue = (value - remainingCents) / 100;
  const currencyString = currencyValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  if (remainingCents === 0) {
    return currencyString;
  } else {
    const remainingCentsString = remainingCents.toString().padStart(2, "0");
    return `${currencyString.replace(/\s/g, "")} + 0,${remainingCentsString}`;
  }
}
