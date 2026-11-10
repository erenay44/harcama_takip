// Kategori adı ve rozet rengi
export const CATEGORIES = [
  { name: "Market", color: "#2e9e6b" },
  { name: "Ulaşım", color: "#2f7fd1" },
  { name: "Fatura", color: "#d9822b" },
  { name: "Eğlence", color: "#a55bd6" },
  { name: "Sağlık", color: "#d9534f" },
  { name: "Diğer", color: "#6c757d" },
];

export const colorOf = (name) =>
  CATEGORIES.find((c) => c.name === name)?.color ?? "#6c757d";

export const formatTL = (n) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(n);
