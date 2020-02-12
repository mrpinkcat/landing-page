import React from 'react';
import styled from 'styled-components/macro';

import HeroText from './HeroText';
import InviteCard from './InviteCard';
import Wave from './Wave';
import WaveLayer from './WaveLayer';

const RelativeContainerEl = styled.div`
  position: relative;
  background: linear-gradient(0deg, rgb(35, 39, 45) 0%, rgba(75,80,89,1) 100%);
`;

const ContainerEl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6rem 2rem 8rem;

  @media (min-width: 768px) {
    padding: 6rem 2rem 12rem;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }

  @media (min-width: 1366px) {
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 16rem;
  }

  @media (min-width: 1920px) {
    padding-bottom: 28rem;
  }
`;

const LeftPartEl = styled.div`
  z-index: 2;
  max-width: 100%;
  width: 100%;

  @media (min-width: 992px) {
    max-width: 50%;
    width: 50%;
  }
`;

const RightPartEl = styled.div`
  z-index: 2;
  max-width: 100%;
  width: 100%;

  @media (min-width: 992px) {
    max-width: 50%;
    width: 50%;
  }
`;

const InviteCardContainerEl = styled.div`
  float: right;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

export default class Hero extends React.Component {
  render() {
    return (
      <RelativeContainerEl>
        <ContainerEl>
          <LeftPartEl>
            <HeroText />
          </LeftPartEl>

          <RightPartEl>
            <InviteCardContainerEl>
              <InviteCard />
            </InviteCardContainerEl>
          </RightPartEl>

          <Wave />

          <WaveLayer />
        </ContainerEl>
      </RelativeContainerEl>
    );
  }
}
