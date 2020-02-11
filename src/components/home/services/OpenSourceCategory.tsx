import React from 'react';
import styled from 'styled-components';

import { ReactComponent as OpenSourceLogo } from '../../../assets/images/open-source.svg';

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
          <OpenSourceLogo style={{
            display: 'block',
            width: '56px',
            height: 'auto',
          }} />
        </LogoContainerEl>

        <TitleEl>Open-source</TitleEl>

        <DescriptionEl>
          You can take a look at the entire code (Discord client, REST-API, providers, ...) and self-host the whole structure.
        </DescriptionEl>
      </ContainerEl>
    );
  }
}
