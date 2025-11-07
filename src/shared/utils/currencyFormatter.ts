import type { CurrencyConfig, CurrencyFormatOptions, CurrencyType } from 'shared/types';

export const formatCurrency = (amount: number, options: CurrencyFormatOptions = {}): string => {
  const { nbsp = true, currency = 'RUB' } = options;
  const currencyConfig: Record<CurrencyType, CurrencyConfig> = {
    RUB: { symbol: '₽', position: 'after', decimalDigits: 0 },
    USD: { symbol: '$', position: 'before', decimalDigits: 2 },
    EUR: { symbol: '€', position: 'before', decimalDigits: 2 },
    GBP: { symbol: '£', position: 'before', decimalDigits: 2 },
    CNY: { symbol: '¥', position: 'before', decimalDigits: 2 },
  };
  const config = currencyConfig[currency];
  const formattedNumber = formatNumberWithSpaces(amount, config.decimalDigits, nbsp);

  if (config.position === 'before') {
    return `${config.symbol}${formattedNumber}`;
  } else {
    return `${formattedNumber}${config.symbol}`;
  }
};

const formatNumberWithSpaces = (number: number, decimalDigits: number, nbsp: boolean): string => {
  const spaceChar = nbsp ? '\u00A0' : ' ';
  const fixedNumber = number.toFixed(decimalDigits);
  const [integerPart, decimalPart] = fixedNumber.split('./');
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, spaceChar);

  return decimalPart
    ? `${formattedInteger},${decimalPart}${spaceChar}`
    : formattedInteger + spaceChar;
};

export const formatRubles = (amount: number, nbsp = true): string => {
  return formatCurrency(amount, { currency: 'RUB', nbsp });
};

export const formatDollars = (amount: number, nbsp = true): string => {
  return formatCurrency(amount, { currency: 'USD', nbsp });
};

export const formatEuros = (amount: number, nbsp = true): string => {
  return formatCurrency(amount, { currency: 'EUR', nbsp });
};
