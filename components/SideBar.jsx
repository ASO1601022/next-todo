import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const SideBar = ({} = {}) => {
  return (
    <div>
      <SideWrapper>
      </SideWrapper>
    </div>
  );
};

export default SideBar;
/* style */
const FullPage = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.41;
`;

const SideWrapper = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: absolute;
  left: 25%;
  top: 30%;
  width: 626px;
  height: 216px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.white};
  .alert {
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    padding-left: 17px;

    height: 50px;
    background: ${(props) => props.theme.colors.main};
    border-radius: 5px;
  }
  .msg {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.05em;
    padding: 18px;
  }
  .mb {
    float: right;
    margin: 9px;
  }
  .modalButton {
    overflow: hidden;
  }
`;
