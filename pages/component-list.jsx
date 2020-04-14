import React, { useState, Children } from 'react';
import TextArea from '../components/Textarea';
import Button from '../components/Button';
import styled, { css } from 'styled-components';
import TextField from '../components/TextField';
import SelectBox from '../components/SelectBox';
import Modal from '../components/Modal';
import Icon from '../components/Icon';
import CheckBox from '../components/CheckBox';
import TodoCard from '../components/TodoCard';

const DlWrapper = styled.dl`
  dd {
    padding: 10px;
  }
`;

export default () => {
  const [textarea, setTextarea] = useState('aaa');
  const [text, setText] = useState('bbb');
  const [select, setSelect] = useState('2');
  const items = [
    {
      text: '選択肢１',
      value: '1',
    },
    {
      text: '選択肢2',
      value: '2',
    },
    {
      text: '選択肢255',
      value: '255',
    },
  ];
  const [delState, setDelState] = useState(false);
  const task = 'モーダルを作る';
  const [infoState, setInfoState] = useState(false);
  const [favState, setFavState] = useState(false);
  const [delState, setDelState] = useState(false);
  const [addState, setAddState] = useState(false);
  const [taskCheck, setTaskCheck] = useState(false);

  const deleteClickHandler = () => {
    setDelState(true);
  };

  const closeHandler = (e) => {
    delState && setDelState(false);
  };

  return (
    <DlWrapper onClick={closeHandler}>
      <dt>textarea</dt>
      <dd>
        <TextArea label="ラベル" value={textarea} setter={setTextarea} />
      </dd>
      <dt>ボタン</dt>
      <dd>
        <Button text="outline" valiant="outline" onClick={() => alert('クリックされた')} />
      </dd>
      <dd>
        <Button text="lime" valiant="lime" onClick={() => alert('クリックされた')} />
      </dd>
      <dd>
        <Button text="main" valiant="main" onClick={() => alert('クリックされた')} />
      </dd>
      <dt>text field</dt>
      <dd>
        <TextField label="ラベル" value={text} setter={setText} />
      </dd>
      <dt>select box</dt>
      <dd>
        <SelectBox items={items} value={select} setter={setSelect}></SelectBox>
      </dd>
      <dt>modal</dt>
      <dd>
        <Button text="削除" valiant="outline" onClick={deleteClickHandler} />
        <Modal active={delState}>
          <p className="alert">警告</p>
          <p className="msg">この操作は取り消しできません。タスク「{task}」を削除します。</p>
          <div className="modalButton">
            <div className="mb">
              <Button text="削除" valiant="main" />
            </div>
            <div className="mb">
              <Button text="削除しない" valiant="outline" />
            </div>
          </div>
        </Modal>
      <dt>icon</dt>
      <dd>
        <Icon name="info" checked={infoState} setter={setInfoState} />
        <Icon name="fav" checked={favState} setter={setFavState} />
        <Icon name="del" checked={delState} setter={setDelState} />
        <Icon name="add" checked={addState} setter={setAddState} />
      </dd>
      <dt>check box</dt>
      <dd>
        <CheckBox text="チェックボックスを作る" checked={taskCheck} setter={setTaskCheck} />
      </dd>
      <dt>todo card</dt>
      <dd>
        <TodoCard text="Todoカードを作る" category="Work" date={new Date()} checked={false} />
      </dd>
    </DlWrapper>
  );
};
