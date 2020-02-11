import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

type HeaderState = {
  currentScroll: number;
}

interface HeaderProps {
  scrolledIntoView: boolean;
}

const HeaderEl = styled.header<HeaderProps>`
  transition: all 0.25s ease-in-out;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  max-height: 4rem;
  background-color: ${props => props.scrolledIntoView ? 'rgba(114, 137, 218, 0.75)' : 'transparent'}
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
          <ImageLogoEl src={logo} alt="Discord-Stream logo" />

          <BrandTitleEl>Discord-Stream</BrandTitleEl>

          <LinkEl>Login</LinkEl>

          <LinkEl>Invite bot</LinkEl>

          <LinkEl>Commands</LinkEl>
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
