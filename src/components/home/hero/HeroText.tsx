import React from 'react';
import styled from 'styled-components/macro';

const ContainerEl = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 992px) {
    align-items: center;
  }
`;

const HeroTextEl = styled.h1`
  margin: 0 0 0.75rem 0;
  color: #dcddde;
  font-family: Karla, sans-serif;
  font-size: 2rem;

  @media (min-width: 325px) {
    font-size: 2.25rem;
  }

  @media (min-width: 425px) {
    font-size: 2.5rem;
  }

  @media (min-width: 992px) {
    font-size: 2.75rem;
  }
`;

const LeadingTextEl = styled.p`
  margin: 1rem 0 1rem 0;
  color: #dcddde;
  font-family: Rubik, sans-serif;
  font-size: 1.25rem;

  @media (max-width: 992px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const OpenSourceTextEl = styled.p`
  margin: 1rem 0;
  color: #dcddde;
  opacity: 0.5;
  font-family: Rubik, sans-serif;
  font-size: 1.125rem;

  @media (max-width: 992px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export default class HeroText extends React.Component {
  render() {
    return (
      <ContainerEl>
        <HeroTextEl>Music bot.</HeroTextEl>

        <HeroTextEl>No lag spikes.</HeroTextEl>

        <LeadingTextEl>
          Invite the bot and start playing tracks or<br />
          playlists on your Discord server.
        </LeadingTextEl>

        <OpenSourceTextEl>
          Open-source project, full source-code is available<br />
          on the GitHub organization.
        </OpenSourceTextEl>
      </ContainerEl>
    );
  }
}
