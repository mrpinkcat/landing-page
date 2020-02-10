import React from 'react';

import Wave from '../components/home/Wave';

export default class Home extends React.Component {
  render() {
    return (
      <div style={{
        position: 'relative',
        width: '100%',
        background: 'linear-gradient(0deg, rgba(53,57,63,1) 0%, rgba(75,80,89,1) 100%)',
      }}>
        <div style={{
          position: 'relative',
          minHeight: '60vh',
        }}>
          <Wave />
        </div>
      </div>
    );
  }
}