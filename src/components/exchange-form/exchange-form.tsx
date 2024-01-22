import React, { useCallback, useEffect, useState } from 'react';
import { useRates } from '../../shared/queries/use-rates';
import {
  AMOUNTS_DECIMALS_COUNT,
  DEFAULT_EXCHANGE_CURRENCY_CODE,
} from '../../shared/constants';
import {
  Form,
  Input,
  InputSuffix,
  InputWideOnMobileWrapper,
  InputWrapper,
  Label,
  ResultWrapper,
  Select,
} from './exchange-form-styles';

interface FormStateModel {
  currencyCode: string;
  amount: string;
}

const ExchangeForm = () => {
  const { data: rates } = useRates();

  const [formData, setFormData] = useState<FormStateModel>({
    currencyCode: '',
    amount: '',
  });

  const [calculatedAmount, setCalculatedAmount] = useState<number>(0);

  const handleAmountChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setFormData((state) => ({ ...state, amount: value }));
  };

  const handleCurrencyChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;

    setFormData((state) => ({ ...state, currencyCode: value }));
  };

  const findRateByCurrencyCode = useCallback(
    (currencyCode: string) => {
      return rates?.find((rate) => rate.code === currencyCode);
    },
    [rates],
  );

  const findRateForDefaultCurrencyCode = useCallback(() => {
    return rates
      ? rates.find((rate) => rate.code === DEFAULT_EXCHANGE_CURRENCY_CODE) ??
          rates[0]
      : undefined;
  }, [rates]);

  useEffect(() => {
    const rate = findRateForDefaultCurrencyCode();

    if (rate) {
      setFormData({
        currencyCode: rate.code,
        amount: '0',
      });
    }
  }, [findRateForDefaultCurrencyCode]);

  useEffect(() => {
    const { amount: amountStr, currencyCode } = formData;
    const rate = findRateByCurrencyCode(currencyCode);

    if (rate) {
      const amount = parseFloat(amountStr);
      setCalculatedAmount(
        ((isNaN(amount) ? 0 : amount) * rate.amount) / rate.rate,
      );
    }
  }, [formData, findRateByCurrencyCode]);

  return (
    <>
      {rates && rates?.length > 0 && (
        <div>
          <Form>
            <InputWideOnMobileWrapper>
              <Label htmlFor="amount">Amount</Label>
              <Input
                name="amount"
                value={formData.amount}
                onChange={handleAmountChange}
              />
              <InputSuffix>CZK</InputSuffix>
            </InputWideOnMobileWrapper>
            <ResultWrapper>
              = {calculatedAmount.toFixed(AMOUNTS_DECIMALS_COUNT)}
            </ResultWrapper>
            <InputWrapper>
              <Label htmlFor="currencyCode">Currency</Label>
              <Select
                name="currencyCode"
                value={formData.currencyCode}
                onChange={handleCurrencyChange}
              >
                {rates.map((rate) => (
                  <option
                    key={'exchange-form-option-' + rate.code}
                    value={rate.code}
                  >
                    {rate.currency} ({rate.country})
                  </option>
                ))}
              </Select>
            </InputWrapper>
          </Form>
        </div>
      )}
    </>
  );
};

export default ExchangeForm;
