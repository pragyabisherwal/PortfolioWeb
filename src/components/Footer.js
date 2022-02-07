import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import HeroImg from '../assets/images/coder.jpeg';

const FooterStyle = styled.div`
  background-color: var(--orange);

  padding-top: 10rem;
  .hero__img {
    position: relative;
    right: 5rem;
    border-radius: 20px;
    max-width: 900px;
    width: 100%;
    height: 300px;
  }
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 5.5rem;
    margin-bottom: 2rem;
    margin-right: 4rem;
  }
  .copyright {
    background-color: var(--orange);

    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    font-weight: bolder;
    .para {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .hero__img {
      height: 300px;
      position: relative;
      left: auto;
      right: auto;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Pragya Bisherwal</h1>
          {/* <PText>
            A freelance web designer and developer from Chittagong, Bangladesh.
            I always make websites that have unique designs and also has a good
            performance rate.
          </PText> */}
          <img src={HeroImg} alt="myimage" className="hero__img" />
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+919810933427',
                path: 'tel:+919810933427',
              },
              {
                title: 'pragyabisherwal@gmail.com',
                path: 'mailto:pragyabisherwal@gmail.com',
              },
              {
                title: 'Delhi,India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - Pragya Bisherwal | Designed By{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pragya-bisherwal-40aa75212/"
            >
              PragyaBisherwal
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
