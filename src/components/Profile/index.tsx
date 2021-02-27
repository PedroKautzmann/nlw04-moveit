import React from 'react';

import { useChallengesContext } from '../../contexts/ChallengesContext';

import styles from '../../styles/components/Profile.module.css';

export const Profile: React.FC = () => {
  const { level } = useChallengesContext();

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pedrokautzmann.png" alt="Pedro Kautzmann" />
      <div>
        <strong>Pedro Kautzmann</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}