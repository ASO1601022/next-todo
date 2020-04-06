import React, { useState } from 'react';
import TextArea from '../components/textarea';
import Button from '../components/button';
import styled from 'styled-components';
import TextField from '../components/textField';
import SelectBox from '../components/selectBox';

const DlWrapper = styled.dl`
  dd {
    padding: 10px;
  }
`;

export default () => {
  const [textarea, setTextarea] = useState('aaa');
  const [text, setText] = useState('bbb');
  const [options, setOption] = useState(['選択肢１', '選択肢２', '選択肢３']);

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
      <dd>
        <SelectBox options={options} setter={setOption[0]}></SelectBox>
      </dd>
    </DlWrapper>
  );
};
