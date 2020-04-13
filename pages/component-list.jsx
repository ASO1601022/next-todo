import React, { useState, Children } from 'react';
import TextArea from '../components/Textarea';
import Button from '../components/Button';
import styled, { css } from 'styled-components';
import TextField from '../components/TextField';
import SelectBox from '../components/SelectBox';
import Modal from '../components/Modal';

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
      </dd>
    </DlWrapper>
  );
};
