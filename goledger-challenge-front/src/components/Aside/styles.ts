import styled from 'styled-components';
import theme from '../../theme';

export const Aside = styled.div`
  position: fixed;
  left: ${theme.padding.medium};
  top: 70px;
  height: 70vh;
  padding: ${theme.padding.medium};
  overflow-y: auto;
  max-width: 240px;
  background-color: ${theme.colors.darkBackground};
  border-radius: 12px;
`;
