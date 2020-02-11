import React from 'react';

export default class Wave extends React.Component {
  render() {
    return (
      <div style={{
        position: 'absolute',
        bottom: '-4px',
        left: '0',
        right: '0',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#dcddde" d="M0,256L60,213.3C120,171,240,85,360,85.3C480,85,600,171,720,202.7C840,235,960,213,1080,181.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    );
  }
}
