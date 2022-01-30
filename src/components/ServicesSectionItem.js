import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Ptext from './PText';

const ItemStyles = styled.div`
  text-align: center;

  .servicesItem__icon {
    svg {
      width: 5rem;
    }
  }
  .servicesItem__title {
    font-size: 3rem;
    color: var(--orange);
    font-weight: bolder;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ipsam!',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">
        {icon}
        <div className="servicesItem__title">{title}</div>
        <Ptext>{desc}</Ptext>
      </div>
    </ItemStyles>
  );
}
