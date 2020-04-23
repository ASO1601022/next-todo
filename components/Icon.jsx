import React from 'react';
import styled, { css } from 'styled-components';
import info from '../public/svg/img/info.svg';
import fav from '../public/svg/img/fav.svg';
import del from '../public/svg/img/del.svg';
import add from '../public/svg/img/add.svg';
import favList from '../public/svg/img/favList.svg';
import all from '../public/svg/img/all.svg';
import line from '../public/svg/img/line.svg';
import logo from '../public/svg/img/logo.svg';
import pen from '../public/svg/img/pen.svg';
import bag from '../public/svg/img/bag.svg';
import fire from '../public/svg/img/fire.svg';
import home from '../public/svg/img/home.svg';
import ref from '../public/svg/img/ref.svg';
import layer from '../public/svg/img/layer.svg';

const Icon = ({ name, className, id, checked, setter } = {}) => {
  const state = checked;
  const iconList = {
    info,
    fav,
    del,
    add,
    all,
    favList,
    line,
    logo,
    pen,
    bag,
    fire,
    home,
    ref,
    layer,
  };

  const clickHandler = () => {
    setter(!state);
  };

  const Svg = styled(iconList[name])`
    ${SvgStyle}
  `;
  return (
    <Svg
      name={name}
      onClick={clickHandler}
      id={id && id}
      className={className && className}
      active={state}
    ></Svg>
  );
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
