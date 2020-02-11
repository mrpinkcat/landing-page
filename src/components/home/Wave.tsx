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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dcddde" fill-opacity="1" d="M0,128L26.7,149.3C53.3,171,107,213,160,202.7C213.3,192,267,128,320,96C373.3,64,427,64,480,101.3C533.3,139,587,213,640,213.3C693.3,213,747,139,800,138.7C853.3,139,907,213,960,245.3C1013.3,277,1067,267,1120,240C1173.3,213,1227,171,1280,154.7C1333.3,139,1387,149,1413,154.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
        </svg>
      </div>
    );
  }
}
