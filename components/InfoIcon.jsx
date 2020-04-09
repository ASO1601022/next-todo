import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Info from '../public/svg/img/info.svg';

const InfoIcon = ({ checked, setter } = {}) => {
  const state = checked;
  const clickHandler = () => {
    setter(!state);
  };
  return (
    <div>
      <Svg onClick={clickHandler} active={state}></Svg>
    </div>
  );
};

export default InfoIcon;

const Svg = styled(Info)`
  path {
    fill: ${(props) => (props.active ? '#00DDEB' : '#888888')};
  }
`;
