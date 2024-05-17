export const Currencies = [
  { value: "USD", label: "$ USD", locale: "en-US" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
  { value: "JPY", label: "¥ JPY", locale: "ja-JP" },
  { value: "GBP", label: "$ USD", locale: "en-GB" },
  { value: "TRY", label: "₺ TRY", locale: "tr-TR" },
];

export type Currency = (typeof Currencies)[0];
