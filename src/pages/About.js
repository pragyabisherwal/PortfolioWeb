import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
// import Button from '../components/Button';
import AboutImg from '../assets/images/heroiii.png';
import AboutInfoItem from '../components/AboutInfoItem';
// import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 3.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--orange);
      font-weight: bolder;
      padding: 0.8rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    color: var(--yellow);
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      height: 600px;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;

    font-weight: bolder;
    height: 80px;
    width: 300px;
    padding: 1.5rem;

    border-radius: 12px;
    box-shadow: 2.5px 3px var(--orange);
  }
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
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
      height: 60px;
      width: 250px;
      padding: 1rem;
    }
    .right {
      img {
        height: 300px;

        right: auto;
        left: auto;
      }
    }
    .button {
      font-size: 1.8rem;
    }
    .button:hover {
      background-color: #43c943;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>PRAGYA BISHERWAL</span>
              </p>
              <h2 className="about__heading">Web Developer</h2>
              <div className="about__info">
                <PText>
                  I am from Delhi, India. A place of beauty and nature.I am a
                  student of Computer Science from India. I am an individual who
                  is Innovative and passionate about the use of technology to
                  solve the world's biggest challenges. A creative and strategic
                  thinker with an emphasis on design and user-experience. I also
                  love to create things that can be usefull to others.
                  <br /> <br />
                  Web developer with front-end development experience.
                  Motivated, ambitious, and passionate about building great
                  products.I want to code things, help people with their
                  problems, and learn to build better communities.Developing new
                  technologies to make programming easier and more enjoyable.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <a
                href="https://drive.google.com/file/d/1be7BUNq2snGMx0F8jHYvM90ElFoSsYzY/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
                btnText="Download CV"
                className="button"
              >
                RESUME
              </a>
              {/* <Button btnText="Download CV" btnLink="#" /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="College"
                items={['Delhi Technological University (COE)']}
              />
              <AboutInfoItem
                title="AISSSE(12)"
                items={['Mother Divine Public School']}
              />
              <AboutInfoItem
                title="AISSE(10)"
                items={['Mother Divine Public School']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACTJS']}
              />
              <AboutInfoItem title="BackEnd" items={['Node', 'PHP']} />
              <AboutInfoItem title="Design" items={['Canva', 'Figma']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem title="10-2021" items={['Enactus India']} />
              <AboutInfoItem
                title="11-2021"
                items={['Global Peace Foundation INDIA']}
              />
              <AboutInfoItem title="12-2021" items={['Careers 360']} />
            </div>
          </div>
        </div>
        {/* <ContactBanner /> */}
      </AboutPageStyles>
    </>
  );
}
