import React from 'react';

import Hero from '../components/home/hero/Hero';
import Services from '../components/home/services/Services';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Hero />
  
        <Services />
      </div>
    );
  }
}
