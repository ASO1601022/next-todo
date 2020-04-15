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
import Pen from '../public/svg/img/pen.svg';

const SideBar = ({ selected, setter } = {}) => {
  const active = selected;

  const changeHandler = (e) => {
    e.target.id !== '' && setter && setter(e.target.id);
  };
  return (
    <FullWrapper>
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
        <button>
          <Pen />
          <span>Edit Categories</span>
        </button>
      </SideBarWrapper>
      <Svg selected={active} />
    </FullWrapper>
  );
};

export default SideBar;
const Svg = styled(Changer)`
  position: relative;
  left: 248px;
  ${(props) => {
    let style;
    switch (props.selected) {
      case 'all':
        style = css`
          top: -955px;
        `;
        break;
      case 'favList':
        style = css`
          top: -910px;
        `;
        break;
      case 'bag':
        style = css`
          top: -813px;
        `;
        break;
      case 'ref':
        style = css`
          top: -765px;
        `;
        break;
      case 'fire':
        style = css`
          top: -723px;
        `;
        break;
      case 'home':
        style = css`
          top: -680px;
        `;
        break;
      case 'layer':
        style = css`
          top: -635px;
        `;
        break;
    }
    return style;
  }};
`;

const FullWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
`;

const SideBarWrapper = styled.div`
  box-shadow: -6px 0px 6px rgba(0, 0, 0, 0.15) inset;
  font-family: 'Raleway';
  width: 289px;
  height: 1024px;
  left: 0;
  background-color: ${(props) => props.theme.colors.main};
  .logo {
    margin: 30px;
  }
  button {
    background-color: rgba(166, 57, 75, 0.3);
    width: 212px;
    border-radius: 5px;
    padding: 10px 10px;
    text-align: left;
    margin-left: 20px;
  }
  button > svg {
    margin-left: 10px;
  }
  button > span {
    color: ${(props) => props.theme.colors.white};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-left: 20px;
  }
`;

const PageWrapper = styled.div`
  color: rgba(255, 255, 254, 0.54);
  margin-left: 10px;
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
  font-weight: 600;
  line-height: 21px;
  margin-left: 30px;
  vertical-align: middle;
`;
