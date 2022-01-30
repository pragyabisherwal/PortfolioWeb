import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  font-size: 2.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default function Ptext({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
