import React from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as PerformanceLogo } from '../../../assets/images/performance.svg';

const ContainerEl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.75rem;
  margin: 0 auto;
`;

const LogoContainerEl = styled.div``;

const TitleEl = styled.h1`
  margin: 2.5rem 0 1rem;
  color: #222941;
  font-family: Rubik, sans-serif;
  font-size: 1.5rem;
  text-align: center;
`;

const DescriptionEl = styled.p`
  margin: 0 0 2rem;
  color: #43485d;
  font-family: Rubik, sans-serif;
  font-weight: 100;
  font-size: 1.125rem;
  text-align: center;
`;

export default class PerformanceCategory extends React.Component {
  render() {
    return (
      <ContainerEl>
        <LogoContainerEl>
          <PerformanceLogo style={{
            display: 'block',
            width: '56px',
            height: 'auto',
          }} />
        </LogoContainerEl>

        <TitleEl>High performance</TitleEl>

        <DescriptionEl>
          No more lag spikes, bot will scale on multiple nodes to deliver the best audio quality.
        </DescriptionEl>
      </ContainerEl>
    );
  }
}
