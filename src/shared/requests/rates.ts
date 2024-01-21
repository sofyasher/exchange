const RATES_URL =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

export const getRates = async (): Promise<string> => {
  // const url = 'https://proxy.cors.sh/' + RATES_URL;
  //
  // const res = await fetch(url, {
  //   headers: {
  //     'x-cors-api-key': 'temp_ef4dca19859a421ad6eb433619309ee7',
  //   },
  // });

  const res = await fetch(RATES_URL);
  return res.text();
};
