import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CheckBox from './CheckBox';
import Icon from './Icon';

const TodoCard = ({ text = '', category, date, checked, id } = {}) => {
  const [state, setState] = useState(checked);
  const [infoState, setInfoState] = useState(checked);
  const [favState, setFavState] = useState(checked);
  const [delState, setDelState] = useState(checked);
  let day = date.getDate();
  let month = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May.',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ][date.getMonth()];
  let weekOfDay = date.getDay();
  return (
    <div id={id}>
      <Date week={weekOfDay}>
        <div className="day">{day}</div>
        <div className="month">{month}</div>
      </Date>
      <TodoCardWrapper>
        <div className="iconGrp">
          <Icon name="info" checked={infoState} setter={setInfoState} className="icon" />
          <Icon name="fav" checked={favState} setter={setFavState} className="icon" />
          <Icon name="del" checked={delState} setter={setDelState} className="icon" />
        </div>
        <CheckBox text={text} checked={state} setter={setState} />
        <div className="cate">{category}</div>
      </TodoCardWrapper>
    </div>
  );
};

export default TodoCard;

const Date = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 5px;
  margin-right: 13px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: normal;
  width: 40px;
  .day {
    font-size: 36px;
    line-height: 42px;
    ${(props) => {
      let style;
      switch (props.week) {
        case 6:
          style = css`
            color: ${(props) => props.theme.colors.saturday};
          `;
          break;
        case 0:
          style = css`
            color: ${(props) => props.theme.colors.main};
          `;
          break;
      }
      return style;
    }};
  }
  .month {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-align: center;
  }
`;

const TodoCardWrapper = styled.div`
  display: inline-block;
  font-family: 'Sawarabi Gothic';
  background: white;
  width: 90%;
  border: 1px solid ${(props) => props.theme.colors.borderline};
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  .iconGrp {
    text-align: right;
    margin-bottom: -17px;
  }
  .iconGrp > svg {
    margin: 5px 5px 0px 5px;
  }
  .cate {
    margin-left: 50px;
    color: ${(props) => props.theme.colors.gray};
    font-size: 14px;
    line-height: 21px;
  }
`;
