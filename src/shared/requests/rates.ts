const CORS_PROXY_URL = `${process.env.REACT_APP_CORS_PROXY_URL}`;
const RATES_URL =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';
const CORS_PROXY_API_KEY = `${process.env.REACT_APP_CORS_PROXY_API_KEY}`;

export const getRates = async (): Promise<string> => {
  const url = `${CORS_PROXY_URL}/${RATES_URL}`;

  const res = await fetch(url, {
    headers: {
      'x-cors-api-key': CORS_PROXY_API_KEY,
    },
  });

  return res.text();
};
