import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2.5rem;
  .button {
    font-size: 2.7rem;
    font-weight: bolder;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--white)'};
    padding: 0.7em 2em;

    border: 5px solid orange;
    border-radius: 10px;

    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  .button:hover {
    background-color: #43c943;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
    .button:hover {
      background-color: #43c943;
    }
  }
`;

export default function Button({
  btnLink = 'test',
  btnText = 'test',
  outline = false,
}) {
  return (
    <Router>
      <ButtonStyle outline={outline} className="button-wrapper">
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      </ButtonStyle>
    </Router>
  );
}