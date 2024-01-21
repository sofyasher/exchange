import React from 'react';
import RatesList from '../rates-list/rates-list';
import ExchangeForm from '../exchange-form/exchange-form';
import { Card, ExchangeWrapper, Loading } from './exchange-styles';
import { useRates } from '../../shared/queries/use-rates';

const Exchange = () => {
  const { isLoading } = useRates();

  return (
    <ExchangeWrapper>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <Card>
            <ExchangeForm />
          </Card>
          <Card>
            <RatesList />
          </Card>
        </>
      )}
    </ExchangeWrapper>
  );
};

export default Exchange;
