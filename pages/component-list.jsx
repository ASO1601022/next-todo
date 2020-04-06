import React, { useState } from 'react';
import TextArea from '../components/textarea';
import Button from '../components/button';
import styled from 'styled-components';
import TextField from '../components/textField';


const DlWrapper = styled.dl`
  dd {
    padding: 10px;
  }
`;

export default () => {
  const [text, setText] = useState('aaa');
  const [text, setText] = useState('bbb');


  return (
    <DlWrapper>
      <dt>textarea</dt>
      <dd>
        <TextArea label="ラベル" value={text} setter={setText} />
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
    </DlWrapper>
  );
};
