export interface CurrencyFormatOptions {
  nbsp?: boolean;
  currency?: CurrencyType;
}

export type CurrencyType = 'RUB' | 'USD' | 'EUR' | 'GBP' | 'CNY';

export interface CurrencyConfig {
  symbol: string;
  position: 'before' | 'after';
  decimalDigits: number;
}
