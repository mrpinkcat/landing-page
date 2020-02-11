import React from 'react';
import styled from 'styled-components/macro';

import Categories from './Categories';

const ContainerEl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 1366px) {
    max-width: 1200px;
  }
`;

const TitleEl = styled.h1`
  margin: 0 auto 1.5rem;
  font-family: Rubik, sans-serif;
  font-size: 2.5rem;
  text-align: center;
  color: #222941;
`;

const LeadingTextEl = styled.p`
  margin: 0 auto 4rem;
  font-family: Rubik, sans-serif;
  font-size: 1.25rem;
  text-align: center;
  color: #43485d;
`;

export default class Services extends React.Component {
  render() {
    return (
      <ContainerEl>
        <TitleEl>Say hello to your new Discord music bot!</TitleEl>

        <LeadingTextEl>Full-featured, open-sourced, Discord music bot to satisfy all your needs</LeadingTextEl>

        <Categories />
      </ContainerEl>
    );
  }
}
