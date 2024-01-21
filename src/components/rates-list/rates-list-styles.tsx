import styled from 'styled-components';
import { devices } from '../../shared/styles/devices';

export const RatesListWrapper = styled.div`
  max-height: 40dvh;
  overflow-y: scroll;

  @media ${devices.desktop} {
    max-height: 50dvh;
    overflow-y: unset;
    column-count: 3;
  }
`;
