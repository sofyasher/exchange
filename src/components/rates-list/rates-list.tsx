import React from 'react';
import { useRates } from '../../shared/queries/use-rates';
import RateItem from '../rate-item/rate-item';
import { RatesListWrapper } from './rates-list-styles';

const RatesList = () => {
  const { data: rates } = useRates();

  return (
    <div>
      <h2>Exchange rates</h2>
      <RatesListWrapper>
        {rates?.map((rate) => (
          <RateItem key={'rate-' + rate.code} rate={rate} />
        ))}
      </RatesListWrapper>
    </div>
  );
};

export default RatesList;
