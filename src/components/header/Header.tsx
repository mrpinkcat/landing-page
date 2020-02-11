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

  span {
    z-index: 1;
  }

  &::after {
    transition: all 0.35s ease-in-out;
    z-index: 0;
    content: "";
    position: absolute;
    bottom: -4px;
    width: calc(100% + 16px);
    height: 2px;
    background-color: #7289da;
  }

  &:hover::after {
    height: calc(100% + 8px);
    border-radius: 4px;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderEl>
        <FlexContainerEl>
          <ImageLogoEl src={logo} alt="Discord-Stream logo" />

          <BrandTitleEl>Discord-Stream</BrandTitleEl>

          <LinkEl>
            <span>Login</span>
          </LinkEl>

          <LinkEl>
            <span>Invite bot</span>
          </LinkEl>

          <LinkEl>
            <span>Commands</span>
          </LinkEl>
        </FlexContainerEl>
      </HeaderEl>
    );
  }
}

export default Header;
