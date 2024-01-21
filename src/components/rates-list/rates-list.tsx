import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { parseRates } from '../../shared/utils';
import { getRates } from '../../shared/requests/rates';

const RatesList = () => {
  const query = useQuery({
    queryKey: ['rates'],
    queryFn: getRates,
    select: (data) => parseRates(data),
  });

  return (
    <div>
      <ul>
        {query.data?.map((rate) => (
          <li>
            {rate.amount} {rate.currency} ({rate.country}) ~ {rate.rate} CZK
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatesList;
