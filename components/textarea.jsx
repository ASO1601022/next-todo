import React from 'react';
import styled from 'styled-components';

const TextArea = ({ label, value = '', setter } = {}) => {
  const changeHandler = e => {
    setter && setter(e.target.value);
  };
  return (
    <div>
      {label && <LabelWrapper>{label}</LabelWrapper>}
      <TextAreaWrapper value={value} onChange={changeHandler} />
    </div>
  );
};

export default TextArea;

const TextAreaWrapper = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.borderline};
  box-sizing: border-box;
`;
const LabelWrapper = styled.label`
  font-size: 14px;
`;
