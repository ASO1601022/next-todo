import React from 'react';
import Link from 'next/link';
//import { RootStyles } from '../styles/common';

/*const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`*/

export default () => (
  <>
    <Link href="/counter">
      <a>カウンターAPP</a>
    </Link>
  </>
);
