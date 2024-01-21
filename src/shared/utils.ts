import { ExchangeRate } from './models/exchange-rate.model';

export const parseRates = (file: string): ExchangeRate[] => {
  const fileLines = file.split('\n');
  const linesWithRates = fileLines.slice(2, fileLines.length - 1);

  return linesWithRates
    .map((line) => line.split('|'))
    .map((line) => ({
      country: line[0],
      currency: line[1],
      amount: parseFloat(line[2]),
      code: line[3],
      rate: parseFloat(line[4]),
    }));
};
