import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from './Icon';
import Changer from '../public/svg/img/changer.svg';

const SideBar = ({ selected, setter, items } = {}) => {
  const active = selected;
  const categories = items.map((cate, index) => {
    return (
      <div id={cate.id} key={index}>
        <Icon name={cate.id} id={cate.id} />
        <Text id={cate.id}>{cate.name}</Text>
      </div>
    );
  });

  const [y, setY] = useState(-917);
  const changeHandler = (e) => {
    // 要素の位置を取得
    let positionY = e.target.getBoundingClientRect().top + window.pageYOffset;
    // 要素内におけるクリック位置を計算
    if (e.target.id !== '') {
      setY(positionY - 1882);
      console.log(y);
      setter && setter(e.target.id);
    }
  };
  const editHandler = () => {};
  return (
    <FullWrapper>
      <SideBarWrapper onClick={changeHandler}>
        <Icon name="logo" className="logo" />
        <PageWrapper selected={active}>
          <div id="all">
            <Icon name="all" id="all" />
            <Text id="all">All</Text>
          </div>
          <div id="favList">
            <Icon name="favList" id="favList" />
            <Text id="favList">Favorite</Text>
          </div>
          <div className="cate">
            Categories
            <div className="line">
              <Icon name="line" />
            </div>
          </div>
          {categories}
        </PageWrapper>
        <button onClick={editHandler}>
          <Icon name="pen" />
          <span>Edit Categories</span>
        </button>
      </SideBarWrapper>
      <Svg selected={active} pos={y} />
    </FullWrapper>
  );
};

export default SideBar;

const Svg = styled(Changer)`
  position: relative;
  left: 248px;
  top: ${(props) => props.pos}px;
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
