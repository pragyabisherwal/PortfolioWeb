import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 2rem 1rem;
  background-color: var(--off_orange);

  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  font-weight: bolder;
  .icon {
    color: var(--white);
    background-color: var(--white);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
