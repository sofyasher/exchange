import { ExchangeRate } from './models/exchange-rate.model';

export const parseRates = (rates: string): ExchangeRate[] => {
  const lines = rates.split('\n');
  const lines2: ExchangeRate[] = lines
    .slice(2, lines.length - 1)
    .map((line) => line.split('|'))
    .map((line) => ({
      country: line[0],
      currency: line[1],
      amount: parseFloat(line[2]),
      code: line[3],
      rate: parseFloat(line[4]),
    }));
  return lines2;
};
