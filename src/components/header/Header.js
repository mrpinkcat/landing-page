import React from 'react';

import logo from '../../assets/images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header style={{
        width: '100%',
      }}>
        <div style={{
          zIndex: '1',
          position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          alignContent: 'space-between',
          top: '0',
          left: '0',
          right: '0',
          padding: '0.5rem 1rem',
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
