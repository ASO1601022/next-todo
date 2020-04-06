import React, { useState } from 'react';
import TextArea from '../components/textarea';
import styled from 'styled-components';
import TextField from '../components/textField';

const DlWrapper = styled.dl`
  dd {
    padding: 10px;
  }
`;

export default () => {
  const [textarea, setTextarea] = useState('aaa');
  const [text, setText] = useState('bbb');

  return (
    <DlWrapper>
      <dt>textarea</dt>
      <dd>
        <TextArea label="ラベル" value={textarea} setter={setTextarea} />
      </dd>
      <dt>text field</dt>
      <dd>
        <TextField label="ラベル" value={text} setter={setText} />
      </dd>
    </DlWrapper>
  );
};
