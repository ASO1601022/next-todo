import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ text, onClick, valiant } = {}) => {
  return (
    <div>
      <ButtonWrapper valiant={valiant} onClick={onClick}>
        {text}
      </ButtonWrapper>
    </div>
  );
};

export default Button;
/* style */
const ButtonWrapper = styled.button`
  min-width: 114px;
  border-radius: 5px;
  padding: 5px 10px;
  ${props => {
    let style;
    switch (props.valiant) {
      case 'outline':
        style = css`
          color: ${props => props.theme.colors.gray};
          background-color: white;
          border: 2px solid ${props => props.theme.colors.gray};
        `;
        break;
      case 'main':
        style = css`
          color: white;
          background-color: ${props => props.theme.colors.main};
        `;
        break;
      case 'lime':
        style = css`
          color: #00214d;
          background-color: ${props => props.theme.colors.lime};
        `;
        break;
    }
    return style;
  }}
`;
