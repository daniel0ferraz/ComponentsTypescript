import React from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;



const TooltipCSS = css`
  position: relative;

  &:hover::after {
    opacity: 1;
    pointer-events: all;
  }
  &::after {
    pointer-events: none;
    transition: 0.5s;
    opacity: 0;
    content: attr(aria-label);
    background: #2c2c2c;
    color: #fff;
    border-radius: 8px;
    padding: 9px 0px;
    font-size: 12px;
    position: absolute;
    left: 0;
	  top: 20px;
    width: 117px;
    text-align: center;
  }
`;
const Box = styled.div`
    display: flex;
    align-items: center;
`;

const Link = styled.a`
  margin: 0 12px;
  color: red;
  ${TooltipCSS}
`;


export default function Tooltip() {
  return (
    <div>
      <GlobalStyle />


      <Box>
        <Link
          href="#component-tooltip"
          role="tooltip"
          aria-label="Configurações">
          Tooltip Top
        </Link>

        <Link
          href="#component-tooltip"
          role="tooltip"
          aria-label="Customizações">
          Tooltip Top
        </Link>
      </Box>

    </div>
  );
}