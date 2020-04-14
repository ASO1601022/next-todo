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
import Changer from '../public/svg/img/changer.svg';

const SideBar = ({ selected, setter } = {}) => {
  const active = selected;
  const iconList = ['all', 'bag', 'favList', 'fire', 'home', 'layer', 'ref'];

  const changeHandler = (e) => {
    e.target.id !== '' && setter && setter(e.target.id);
    console.log(active);
  };
  return (
    <div>
      <SideBarWrapper onClick={changeHandler}>
        <Logo className="logo" />
        <PageWrapper selected={active}>
          <div id="all">
            <All id="all" />
            <Text id="all">All</Text>
          </div>
          <div id="favList">
            <FavList id="favList" />
            <Text id="favList">Favorite</Text>
          </div>
          <div className="cate">
            Categories
            <div className="line">
              <Line />
            </div>
          </div>
          <div id="bag">
            <Bag id="bag" />
            <Text id="bag">Work</Text>
          </div>
          <div id="ref">
            <Ref id="ref" />
            <Text id="ref">お買い物リスト</Text>
          </div>
          <div id="fire">
            <Fire id="fire" />
            <Text id="fire">買いたい</Text>
          </div>
          <div id="home">
            <Home id="home" />
            <Text id="home">House</Text>
          </div>
          <div id="layer">
            <Layer id="layer" />
            <Text id="layer">その他</Text>
          </div>
        </PageWrapper>
      </SideBarWrapper>
      <Changer />
    </div>
  );
};

export default SideBar;

const SideBarWrapper = styled.div`
  font-family: 'Raleway';
  width: 289px;
  height: 1024px;
  left: 0;
  background-color: ${(props) => props.theme.colors.main};
  .logo {
    margin: 30px;
  }
`;

const PageWrapper = styled.div`
  color: rgba(255, 255, 254, 0.54);
  div {
    margin: 20px;
    height: 24px;
  }
  svg {
    vertical-align: middle;
  }
  path {
    fill: rgba(255, 255, 254, 0.54);
  }
  .cate {
    font-size: 12px;
    line-height: 14px;
    font-weight: bold;
    margin-top: 30px;
    color: rgba(255, 255, 254, 1);
  }
  .line {
    position: relative;
    top: -28px;
    left: -25px;
  }
  .line > svg > path {
    fill: none;
  }
  #${(props) => props.selected} {
    color: rgba(255, 255, 254, 1);
  }
  #${(props) => props.selected} > svg > path {
    fill: rgba(255, 255, 254, 1);
  }
`;

const Text = styled.span`
  font-size: 18px;
  line-height: 21px;
  margin-left: 30px;
  vertical-align: middle;
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
  }};
`;
