import React, { useState } from 'react';
import TextArea from '../components/Textarea';
import Button from '../components/Button';
import styled from 'styled-components';
import TextField from '../components/TextField';
import SelectBox from '../components/SelectBox';
import SideBar from '../components/SideBar';

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

  return (
    <DlWrapper>
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
      <dt>side bar</dt>
      <dd>
        <SideBar name="Bag" />
      </dd>
    </DlWrapper>
  );
};
