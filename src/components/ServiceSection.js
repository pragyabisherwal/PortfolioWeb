import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What will I do for you" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="DataStructures & Algorithm"
            desc="Good knowledge of data structures, algorithms, and object-oriented programming
            "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
