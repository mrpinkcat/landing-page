import React from 'react';
import styled from 'styled-components/macro';

import HeroText from './HeroText';
import InviteCard from './InviteCard';
import Wave from './Wave';

const RelativeContainerEl = styled.div`
  position: relative;
  background: linear-gradient(0deg, rgb(35, 39, 45) 0%, rgba(75,80,89,1) 100%);
`;

const ContainerEl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-top: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
    min-height: 90vh;
  }

  @media (min-width: 1366px) {
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 1920px) {
    min-height: 70vh;
  }
`;

const LeftPartEl = styled.div`
  max-width: 100%;
  width: 100%;

  @media (min-width: 992px) {
    max-width: 50%;
    width: 50%;
  }
`;

const RightPartEl = styled.div`
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
  padding: 0 4rem;

  @media (min-width: 992px) {
    display: block;
  }

  @media (max-width: 1023px) {
    padding: 0;
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
        </ContainerEl>
      </RelativeContainerEl>
    );
  }
}
