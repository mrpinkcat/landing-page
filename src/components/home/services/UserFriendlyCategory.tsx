import React from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as UserFriendlyLogo } from '../../../assets/images/user-friendly.svg';

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
  font-family: Karla, sans-serif;
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

export default class UserFriendlyCategory extends React.Component {
  render() {
    return (
      <ContainerEl>
        <LogoContainerEl>
          <UserFriendlyLogo style={{
            display: 'block',
            width: '56px',
            height: 'auto',
          }} />
        </LogoContainerEl>

        <TitleEl>User-friendly</TitleEl>

        <DescriptionEl>
          Great interface through Discord rich-embed messages and a dedicated online panel.
        </DescriptionEl>
      </ContainerEl>
    );
  }
}
