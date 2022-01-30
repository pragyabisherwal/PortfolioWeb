import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    display: inline-block;

    img {
      height: 100%;
    }
    margin-top: 2.5rem;
  }
  .projectItem__info {
    margin-top: 3rem;
    background-color: var(--yellow);
    padding: 2.5rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 3rem;
    color: white;
  }
  .projectItem__desc {
    font-size: 2rem;
    font-weight: bold;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
