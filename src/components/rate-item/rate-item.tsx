import React from 'react';
import { ExchangeRate } from '../../shared/models/exchange-rate.model';
import { Item } from './rate-item-styles';

interface RateItemProps {
  rate: ExchangeRate;
}

const RateItem = ({ rate: rateItem }: RateItemProps) => {
  const { amount, currency, country, rate } = rateItem;

  return (
    <Item>
      {amount} {currency} ({country}) ~ {rate}
      {'\u00A0'}CZK
    </Item>
  );
};

export default RateItem;
