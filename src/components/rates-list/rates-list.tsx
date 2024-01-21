import React from 'react';
import { useRates } from '../../shared/queries/use-rates';

const RatesList = () => {
  const { data: rates } = useRates();

  return (
    <div>
      <ul>
        {rates?.map((rate) => (
          <li key={'rate-' + rate.code}>
            {rate.amount} {rate.currency} ({rate.country}) ~ {rate.rate} CZK
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatesList;
