import React, { useState } from 'react';
import TextArea from '../components/textarea';
import styled from 'styled-components';

const DlWrapper = styled.dl`
  dd {
    padding: 10px;
  }
`;

export default () => {
  const [textarea, setTextarea] = useState('aaa');

  return (
    <DlWrapper>
      <dt>textarea</dt>
      <dd>
        <TextArea label="ラベル" value={textarea} setter={setTextarea} />
      </dd>
    </DlWrapper>
  );
};
