import styled from "styled-components";
import theme from "../../theme";

export const Header = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;

  display: flex;
  height: 40px;
  align-items: center;
  padding-left: ${theme.padding.medium};
  padding-right: ${theme.padding.medium};
`