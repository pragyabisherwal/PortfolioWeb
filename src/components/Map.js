import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/newMap.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    left: 10%;
    top: 20%;

    padding: 2rem;
    background: var(--off_orange);
    width: 100%;
    max-width: 320px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 2.5rem;
    font-weight: bolder;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>SECTOR-3,ROHINI,NEW DELHI</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Rohini,+New+Delhi,+Delhi/@28.7406349,77.0577435,13z/data=!3m1!4b1!4m5!3m4!1s0x390d013a47a1803d:0xedfb8cc477815e2f!8m2!3d28.7382677!4d77.0822151"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
