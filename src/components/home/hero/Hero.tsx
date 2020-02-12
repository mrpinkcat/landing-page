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
  flex-direction: row;
  width: 100%;
  min-height: 90vh;
  padding-top: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    min-height: 100vh;
    padding-bottom: 220px;
  }

  @media (max-width: 634px) {
    padding-bottom: 110px;
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
  max-width: 50%;
  width: 50%;

  @media (max-width: 992px) {
    max-width: 100%;
    width: 100%;
  }
`;

const RightPartEl = styled.div`
  z-index: 2;
  max-width: 50%;
  width: 50%;

  @media (max-width: 992px) {
    margin-top: 20px;
    max-width: 100%;
    width: 100%;
  }
`;

const InviteCardContainerEl = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 4rem;
  padding: 0;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (min-width: 1366px) {
    padding-left: 0;
    padding-right: 0;
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
