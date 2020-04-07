import React from 'react';
import styled from 'styled-components';

const SelectBox = ({ options = [], setter } = {}) => {
  const changeHandler = () => {
    setter;
  };
  const items = [];
  {
    options.forEach((option) => {
      items.push(
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      );
    });
  }
  return (
    <div>
      <SelectBoxWrapper defaultValue={options[0].value} onChange={changeHandler}>
        {items}
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
