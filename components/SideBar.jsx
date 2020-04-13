import React from 'react';
import styled, { css } from 'styled-components';
import All from '../public/svg/img/all.svg';
import Bag from '../public/svg/img/bag.svg';
import FavList from '../public/svg/img/favList.svg';
import Fire from '../public/svg/img/fire.svg';
import Home from '../public/svg/img/home.svg';
import Layer from '../public/svg/img/layer.svg';
import Line from '../public/svg/img/line.svg';
import Logo from '../public/svg/img/logo.svg';
import Ref from '../public/svg/img/ref.svg';

const SideBar = ({ name, selected, setter } = {}) => {
  const active = selected;
  const iconList = { Bag, FavList, Fire, Home, Layer, Line };

  const Svg = styled(iconList[name]);

  const clickHandler = () => {
    setter(!state);
  };
  return (
    <SideBarWrapper>
      <Logo />
      <p>
        <All />
        <Text>All</Text>
      </p>
      <p>
        <FavList />
        <Text>Favorite</Text>
      </p>
      <p>categories</p>
      <Line />
      <Bag />
      <Ref />
      <Fire />
      <Home />
      <Layer />
    </SideBarWrapper>
  );
};

export default SideBar;

const SideBarWrapper = styled.div`
  width: 289px;
  height: 1024px;
  left: 0;
  background-color: ${(props) => props.theme.colors.main};
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
