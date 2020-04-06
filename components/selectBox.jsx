import React from 'react';
import styled from 'styled-components';

const SelectBox = ({ options = [], setter } = {}) => {
  const changeHandler = e => {
    setter && setter(e.target.value);
  };
  const items = [];
  {
    for (let i = 0; i < options.length; i++) {
      items.push(<option value={options[i]}>{options[i]}</option>);
    }
  }
  return (
    <div>
      <SelectBoxWrapper defaultValue={options[0]} onChange={changeHandler}>
        {items}
      </SelectBoxWrapper>
    </div>
  );
};

export default SelectBox;

const SelectBoxWrapper = styled.select`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.borderline};
  box-sizing: border-box;
`;
