import React from 'react';
import { ExchangeRate } from '../../shared/models/exchange-rate.model';
import { Item } from './rate-item-styles';

interface RateItemProps {
  rate: ExchangeRate;
}
const RateItem = ({ rate }: RateItemProps) => {
  const { code, amount, currency, country } = rate;

  return (
    <Item key={'rate-' + code}>
      {amount} {currency} ({country}) ~ {rate.rate}
      {'\u00A0'}CZK
    </Item>
  );
};

export default RateItem;
