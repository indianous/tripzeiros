export default function brlConverter(price: number): string {
  return (
    "R$ " +
    price.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }) +
    "."
  );
}
