import React from 'react';
import styled from 'styled-components/macro';

import logo from '../../assets/images/logo.png';

type HeaderState = {
  currentScroll: number;
}

interface HeaderProps {
  scrolledIntoView: boolean;
}

const HeaderEl = styled.header<HeaderProps>`
  transition: all 0.25s ease-in-out;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  max-height: 4rem;
  box-shadow: ${props => props.scrolledIntoView ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'};
  background-color: ${props => props.scrolledIntoView ? '#dcddde' : 'transparent'};
`;

const FlexContainerEl = styled.div`
  display: flex;
  align-items: center;
  align-content: space-between;
  height: 4rem;
  padding: 0 2rem;

  @media (min-width: 1366px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
  }
`;

const BrandPartEl = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 1rem;
  color: ${props => props.scrolledIntoView ? '#222941' : '#dcddde'};

  @media (min-width: 768px) {
    margin-right: 2rem;
  }
`;

const ImageLogoEl = styled.img`
  display: block;
  height: 2rem;
  width: 2rem;

  @media (min-width: 768px) {
    margin-right: 16px;
  }
`;

const BrandTitleEl = styled.h1`
  display: none;
  font-family: Karla, sans-serif;
  font-size: 1.25rem;
  white-space: nowrap;

  @media (min-width: 768px) {
    display: block;
    font-size: 1.5rem;
  }
`;

const LinksPartEl = styled.div<HeaderProps>`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  height: 100%;
  color: ${props => props.scrolledIntoView ? '#43485d' : '#dcddde'};
  mask-image: linear-gradient(to right, transparent, black 30px, black 90%, transparent);

  @media (min-width: 768px) {
    overflow: hidden;
    mask-image: none;
  }
`;

const LinkEl = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  border: 0;
  border-radius: 16px;
  color: inherit;
  font-family: Karla, sans-serif;
  font-size: 1.125rem;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;

  &:first-child {
    padding-left: 2.75rem;
    margin-left: 0;    
  }

  &:last-child {
    padding-right: 2.75rem;
    margin-right: 0;
  }
`;

class Header extends React.Component<{}, HeaderState> {
  constructor(props: Readonly<HeaderState>) {
    super(props);

    this.handleScrollEvent = this.handleScrollEvent.bind(this);

    this.state = {
      currentScroll: document.documentElement.scrollTop,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScrollEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScrollEvent);
  }

  render() {
    return (
      <HeaderEl scrolledIntoView={this.state.currentScroll > 0}>
        <FlexContainerEl>
          <BrandPartEl scrolledIntoView={this.state.currentScroll > 0}>
            <ImageLogoEl src={logo} alt="Discord-Stream logo" />

            <BrandTitleEl>
              Discord-Stream
            </BrandTitleEl>
          </BrandPartEl>

          <LinksPartEl scrolledIntoView={this.state.currentScroll > 0}>
            <LinkEl>Login</LinkEl>

            <LinkEl>Invite bot</LinkEl>

            <LinkEl>Commands</LinkEl>

            <LinkEl>GitHub</LinkEl>
          </LinksPartEl>
        </FlexContainerEl>
      </HeaderEl>
    );
  }

  handleScrollEvent() {
    this.setState({
      currentScroll: document.documentElement.scrollTop,
    });
  }
}

export default Header;
