import React from 'react';
import styled from 'styled-components/macro';

const ContainerEl = styled.div`
  position: relative;
  width: 400px;
  max-width: 400px;
  padding: 24px 48px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

const ProgressionEl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #7289da;
`;

const HeaderTextEl = styled.h1`
  margin: 1rem 0 1.5rem 0;
  color: #222941;
  font-family: Rubik, sans-serif;
  font-size: 1.75rem;
  text-align: center;
`;

const DescriptionTextEl = styled.p`
  margin: 1rem 0 1.5rem 0;
  color: #454a5d;
  font-family: Rubik, sans-serif;
  font-size: 1.125rem;
  text-align: center;
`;

const ButtonResetEl = styled.button`
  display: block;
  width: 225px;
  height: 48px;
  margin: 0 auto 1.25rem;
  padding: 0;
  border: 0;
  border-radius: 24px;
  font-family: Rubik, sans-serif;
  font-size: 1.125rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
`;

const PrimaryCTAEl = styled(ButtonResetEl)`
  background-color: #222941;
  color: #fff;
`;

const SecondaryCTAEl = styled(ButtonResetEl)`
  border: 2px solid #222941;
  color: #222941;
  background-color: transparent;
`;

export default class InviteCard extends React.Component {
  render() {
    return (
      <ContainerEl>
        <ProgressionEl />

        <HeaderTextEl>Let's get started</HeaderTextEl>

        <DescriptionTextEl>Invite the bot on your Discord server, start playing some music and access the panel!</DescriptionTextEl>

        <PrimaryCTAEl>Invite the bot</PrimaryCTAEl>

        <SecondaryCTAEl>Access the panel</SecondaryCTAEl>
      </ContainerEl>
    );
  }
}
