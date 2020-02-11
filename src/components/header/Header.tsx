import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

const HeaderEl = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  max-height: 4rem;
`;

const FlexContainerEl = styled.div`
  display: flex;
  align-items: center;
  align-content: space-between;
  height: 4rem;
  padding: 0 2rem;

  @media (min-width: 1366px) {
    padding: 0 4rem;
  }

  @media (min-width: 1920px) {
    padding: 0 6rem;
  }
`;

const ImageLogoEl = styled.img`
  display: block;
  height: 2rem;
  width: 2rem;
  margin-right: 16px;
`;

const BrandTitleEl = styled.h1`
  margin-right: 2rem;
  font-family: Rubik, sans-serif;
  font-size: 1.5rem;
  color: #dcddde;
`;

const LinkEl = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  border: 0;
  border-radius: 16px;
  color: #dcddde;
  font-family: Rubik, sans-serif;
  font-size: 1.175rem;
  cursor: pointer;
  user-select: none;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderEl>
        <FlexContainerEl>
          <ImageLogoEl src={logo} alt="Discord-Stream logo" />

          <BrandTitleEl>Discord-Stream</BrandTitleEl>

          <LinkEl>Login</LinkEl>

          <LinkEl>Invite bot</LinkEl>

          <LinkEl>Commands</LinkEl>
        </FlexContainerEl>
      </HeaderEl>
    );
  }
}

export default Header;
