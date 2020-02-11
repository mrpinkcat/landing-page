import React from 'react';

import logo from '../../assets/images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header style={{
        zIndex: 1,
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        width: '100%',
        height: '4rem',
        maxHeight: '4rem',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'space-between',
          height: '4rem',
          padding: '0 2rem',
        }}>
          <img src={logo} alt="Discord-Stream logo" style={{
            display: 'block',
            height: '2rem',
            width: '2rem',
            marginRight: '16px',
          }} />

          <h1 style={{
            fontFamily: 'Rubik, sans-serif',
            color: '#dcddde',
            fontSize: '1.5rem',
          }}>Discord-Stream</h1>
        </div>
      </header>
    );
  }
}

export default Header;
