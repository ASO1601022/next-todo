import React from 'react';
import styled from 'styled-components';

const SelectBox = ({ items = [], value = '', changeHandler } = {}) => {
  const option = items.map((item, index) => {
    return (
      <option key={index} value={item.value}>
        {item.text}
      </option>
    );
  });
  return (
    <div>
      <SelectBoxWrapper defaultValue={value} onChange={changeHandler}>
        {option}
      </SelectBoxWrapper>
    </div>
  );
};

export default SelectBox;

const SelectBoxWrapper = styled.select`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.borderline};
  box-sizing: border-box;
`;
