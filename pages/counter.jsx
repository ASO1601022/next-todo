import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  const eventHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={eventHandler}>クリックしてね！</button>
      <div>{count}回</div>
    </>
  );
};
