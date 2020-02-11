import React from 'react';

import InviteCard from '../components/home/InviteCard';
import Wave from '../components/home/Wave';

import styles from './home.module.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles['container']}>
        <div className={styles['left-part']}>
          <h1 className={styles['hero-text']}>Music bot.</h1>

          <h2 className={styles['hero-text']}>No lag spikes.</h2>

          <p className={styles['leading-text']}>
            Invite the bot and start playing tracks or<br />
            playlists on your Discord server.
          </p>

          <p className={styles['open-source-text']}>
            Open-source project, full source-code is available<br />
            on the GitHub organization.
          </p>
        </div>

        <div className={styles['right-part']}>
          {/* Put a screenshot of the bot in action, on Discord */}

          <div className={styles['invite-card-container']}>
            <InviteCard></InviteCard>
          </div>
        </div>

        <Wave />
      </div>
    );
  }
}
