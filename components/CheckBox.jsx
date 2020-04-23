import React from 'react';
import styled, { css } from 'styled-components';
import Frame from '../public/svg/img/frame.svg';
import Check from '../public/svg/img/check.svg';

const CheckBox = ({ text = '', checked, setter } = {}) => {
  const state = checked;
  let checkBoxSvg = state ? <Check /> : <Frame />;
  const clickHandler = (e) => {
    setter(!state);
    checkBoxSvg = state ? <Check /> : <Frame />;
  };
  return (
    <div>
      <CheckBoxWrapper onClick={clickHandler}>{checkBoxSvg}</CheckBoxWrapper>
      <CheckText checked={state}>{text}</CheckText>
    </div>
  );
};

export default CheckBox;

const CheckBoxWrapper = styled.span`
  svg {
    vertical-align: middle;
  }
`;

const CheckText = styled.span`
  vertical-align: middle;
  margin-left: 24px;
  font-size: 18px;
  color: ${(props) => (props.checked ? props.theme.colors.gray : props.theme.colors.text)};
  background-image: ${(props) =>
    props.checked ? 'linear-gradient(179.17deg, #00ebc7 0%, #00ddeb 100%)' : 'white'};
  background-repeat: no-repeat;
  background-size: 100% 20%;
  background-position: center;
  border-radius: 3px;
`;
