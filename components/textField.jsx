import React from 'react';
import styled from 'styled-components';

const TextField = ({ label, value = '', placeholder = '', setter } = {}) => {
  const changeHandler = (e) => {
    setter && setter(e.target.value);
  };
  return (
    <div>
      {label && <LabelWrapper>{label}</LabelWrapper>}
      <TextFieldWrapper value={value} onChange={changeHandler} placeholder={placeholder} />
    </div>
  );
};

export default TextField;

const TextFieldWrapper = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.borderline};
  box-sizing: border-box;
  font-size: 18px;
  padding: 15px 20px;
  background-color: white;
  ::placeholder {
    color: ${(props) => props.theme.colors.gray};
    text-align: center;
  }
`;
const LabelWrapper = styled.label`
  font-size: 14px;
`;
