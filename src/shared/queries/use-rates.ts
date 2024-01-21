import { useQuery } from '@tanstack/react-query';
import { getRates } from '../requests/rates-requests';
import { parseRates } from '../utils';

export const useRates = () =>
  useQuery({
    queryKey: ['rates'],
    queryFn: getRates,
    select: (data) => parseRates(data),
  });
