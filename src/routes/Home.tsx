import React from 'react';
import styled from 'styled-components';

import HeroText from '../components/home/HeroText';
import InviteCard from '../components/home/InviteCard';
import Wave from '../components/home/Wave';

const ContainerEl = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding-top: 6rem;
  background: linear-gradient(0deg, rgba(53,57,63,1) 0%, rgba(75,80,89,1) 100%);
`;

const LeftPartEl = styled.div`
  max-width: 50%;
  width: 50%;
  padding: 0 2rem;
`;

const RightPartEl = styled.div`
  max-width: 50%;
  width: 50%;
`;

const InviteCardContainerEl = styled.div`
  float: right;
  padding: 0 10rem;
`;

export default class Home extends React.Component {
  render() {
    return (
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
    );
  }
}
