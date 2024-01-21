import React, { useEffect, useState } from 'react';
import { useRates } from '../../shared/queries/use-rates';

const ExchangeForm = () => {
  const { data: rates } = useRates();

  const [formData, setFormData] = useState<{
    currency: string;
    amount: string;
  }>({ currency: 'PHP', amount: '0' });

  const [calculatedAmount, setCalculatedAmount] = useState<number>(0);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  useEffect(() => {
    const { amount, currency: currencyCode } = formData;
    if (rates) {
      const rate = rates?.find((rate) => rate.code === currencyCode)!;
      setCalculatedAmount((parseFloat(amount) * rate.rate) / rate.amount);
    }
  }, [formData, rates]);

  return (
    <form>
      {formData.amount}|{formData.currency}|{calculatedAmount}
      <input name="amount" value={formData.amount} onChange={handleChange} />
      <select name="currency" onChange={handleChange}>
        {rates?.map((rate) => (
          <option key={'exchange-form-option-' + rate.code} value={rate.code}>
            {rate.currency} ({rate.country})
          </option>
        ))}
      </select>
    </form>
  );
};

export default ExchangeForm;
