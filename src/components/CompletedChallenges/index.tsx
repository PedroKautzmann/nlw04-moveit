import React from 'react';

import { useChallengesContext } from '../../contexts/ChallengesContext';

import styles from '../../styles/components/CompletedChallenges.module.css';

export const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useChallengesContext();

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}