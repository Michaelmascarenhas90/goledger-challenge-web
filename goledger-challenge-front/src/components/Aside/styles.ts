import styled from 'styled-components';
import theme from '../../theme';

export const Aside = styled.div`
  height: 70vh;
  padding: ${theme.padding.medium};
  margin-right: ${theme.padding.medium};
  min-width: 240px;
  overflow-y: auto;
  background-color: ${theme.colors.darkBackground};
  border-radius: 12px;
`;

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.padding.small};
`

export const MenuItem = styled.p`
  cursor: pointer;
`
