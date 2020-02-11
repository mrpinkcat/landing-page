import React from 'react';

import styles from './invitecard.module.css';

export default class InviteCard extends React.Component {
  render() {
    return (
      <div className={styles['container']}>
        <div className={styles['top-border']}></div>

        <h1 className={styles['header-text']}>Let's get started</h1>

        <p className={styles['leading-text']}>Invite the bot on your Discord server, start playing some music and access the panel!</p>

        <button className={styles['cta-invite']}></button>

        <button className={styles['cta-panel']}></button>
      </div>
    );
  }
}
