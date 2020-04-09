import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

const Modal = ({ task = '' } = {}) => {
  const [state, setState] = useState(false);
  const clickHandler = (e) => {
    setState(true);
  };
  const deleteHandler = (e) => {
    setState(false);
  };
  const cancelHandler = (e) => {
    setState(false);
  };
  return (
    <div>
      <ModalWrapper active={state}>
        <p className="alert">警告</p>
        <p className="msg">この操作は取り消しできません。タスク「{task}」を削除します。</p>
        <div className="modalButton">
          <div className="mb">
            <Button text="削除" valiant="main" onClick={deleteHandler} />
          </div>
          <div className="mb">
            <Button text="削除しない" valiant="outline" onClick={cancelHandler} />
          </div>
        </div>
      </ModalWrapper>
      <button onClick={clickHandler}>削除</button>
    </div>
  );
};

export default Modal;
/* style */
const ModalWrapper = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: absolute;
  left: 25%;
  top: 30%;
  width: 626px;
  height: 216px;
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
