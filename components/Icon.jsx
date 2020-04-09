import React from 'react';
import styled, { css } from 'styled-components';
import Info from '../public/svg/img/info.svg';
import Fav from '../public/svg/img/fav.svg';
import Del from '../public/svg/img/del.svg';
import Add from '../public/svg/img/add.svg';

const Icon = ({ name, checked, setter } = {}) => {
  const state = checked;
  let icon;
  switch (name) {
    case 'info':
      icon = <Info />;
      break;
    case 'fav':
      icon = <Fav />;
      break;
    case 'del':
      icon = <Del />;
      break;
    case 'add':
      icon = <Add />;
      break;
  }
  const clickHandler = () => {
    setter(!state);
  };
  return (
    <Svg name={name} onClick={clickHandler} active={state}>
      {icon}
    </Svg>
  );
};

export default Icon;

const Svg = styled.div`
  ${(props) => {
    let style;
    switch (props.name) {
      case 'info':
        style = css`
          svg > path {
            fill: ${(props) => (props.active ? props.theme.colors.blue : props.theme.colors.gray)};
          }
        `;
        break;
      case 'fav':
        style = css`
          svg > path {
            fill: ${(props) =>
              props.active ? props.theme.colors.yellow : props.theme.colors.gray};
          }
        `;
        break;
    }
    return style;
  }}
`;
