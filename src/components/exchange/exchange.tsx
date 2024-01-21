import React from 'react';
import RatesList from '../rates-list/rates-list';
import ExchangeForm from '../exchange-form/exchange-form';
import { Card, ExchangeWrapper } from './exchange-styles';

const Exchange = () => {
  return (
    <ExchangeWrapper>
      <Card>
        <ExchangeForm />
      </Card>
      <Card>
        <RatesList />
      </Card>
    </ExchangeWrapper>
  );
};

export default Exchange;
