import React from 'react';
import styled, { css } from 'styled-components';
import info from '../public/svg/img/info.svg';
import fav from '../public/svg/img/fav.svg';
import del from '../public/svg/img/del.svg';
import add from '../public/svg/img/add.svg';

const Icon = ({ name, checked, setter } = {}) => {
  const state = checked;
  const iconList = { info, fav, del, add };

  const clickHandler = () => {
    setter(!state);
  };

  const Svg = styled(iconList[name])`
    ${SvgStyle}
  `;
  return <Svg name={name} onClick={clickHandler} active={state}></Svg>;
};

export default Icon;

const SvgStyle = css`
  ${(props) => {
    let style;
    switch (props.name) {
      case 'info':
        style = css`
          path {
            fill: ${(props) => (props.active ? props.theme.colors.blue : props.theme.colors.gray)};
          }
        `;
        break;
      case 'fav':
        style = css`
          path {
            fill: ${(props) =>
              props.active ? props.theme.colors.yellow : props.theme.colors.gray};
          }
        `;
        break;
    }
    return style;
  }}
`;
