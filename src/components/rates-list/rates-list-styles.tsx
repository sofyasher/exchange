import styled from 'styled-components';
import { device } from '../../shared/styles/media';

export const RatesListWrapper = styled.div`
  max-height: 40dvh;
  overflow-y: scroll;

  @media ${device.desktop} {
    max-height: 50dvh;
    overflow-y: unset;
    column-count: 3;
  }
`;
