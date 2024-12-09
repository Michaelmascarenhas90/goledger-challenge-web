import styled from 'styled-components';
import theme from '../../theme';

export const Aside = styled.div`
  height: 70vh;
  margin-right: ${theme.padding.medium};
  max-width: 240px;
  background-color: ${theme.colors.darkBackground};
  border-radius: 12px;
`;

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.padding.medium};
  gap: ${theme.padding.small};
`

export const MenuItem = styled.p`
  cursor: pointer;
`

export const HeaderAside = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${theme.padding.small};
  min-height: 40px;
  max-height: 48px;
  padding: ${theme.padding.medium};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.1em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2); 
    border-radius: 10px; 
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; 
  }
`
