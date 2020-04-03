import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, userDispatch, useDispatch } from 'react-redux';
import { add } from '../stores/counter';
import { reset } from '../stores/counter';

const Hello = styled.span`
  color: blue;
`;

const Button = styled.button`
  padding: 3px;
  color: white;
  background: ${props => props.color};
  border-bottom: solid 2px #d27d00;
  border-radius: 4px;
  box-shadow: isnet 0 2px 0 rgba(255, 255, 255, 0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;

  &active {
    border-bottom: solid 2px #fd9535;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    color: #f00;
  }
`;

export default () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);
  const [helloList, setHelloList] = useState([]);

  const helloEventHandler = () => {
    setHelloList(state => [...state, <Hello>Hello World!</Hello>]);
    dispatch(add(1));
  };

  const resetEventHandler = () => {
    setHelloList(state => []);
    dispatch(reset());
  };

  return (
    <>
      <Button color="orange" onClick={helloEventHandler}>
        クリックしてね！
      </Button>
      <br />
      <Button color="red" onClick={resetEventHandler}>
        リセット
      </Button>
      <div>{count}回</div>
      {helloList}
    </>
  );
};
