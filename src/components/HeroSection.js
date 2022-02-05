import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/EDUMAIN.png';
import Button from './Button';

import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 3rem;
    margin-bottom: -9rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
      color: #0e0e0e;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 9rem;
      color: #f79708;
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: -9rem auto;
    /* margin-bottom: -9rem; */
  }
  .hero__info {
    margin-top: 8rem;
    font-weight: bold;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: 5rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 8rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello This is</span>
            <span className="hero__name">Pragya Bisherwal</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              An enthusiastic fresher with highly motivated and leadership
              skills having bachelors of engineering degree in Computer
              Engineering.
            </PText>
            <Button btnLink="/projects" btnText="See My Work" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
