import React from 'react';

import { useChallengesContext } from '../../contexts/ChallengesContext';

import styles from '../../styles/components/ExperienceBar.module.css';

export const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useChallengesContext();

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar} >
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }} >{currentExperience}</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}