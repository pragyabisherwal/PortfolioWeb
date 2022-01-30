import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 3rem;
    font-weight: bold;
  }

  h2 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    font-weight: bolder;
    color: var(--yellow);
    margin-top: 0.5rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 2.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <div>
      <SectionTitleStyle className="section-title">
        <p>{subheading}</p>
        <h2>{heading}</h2>
      </SectionTitleStyle>
    </div>
  );
}
