import React from 'react';

import { useChallengesContext } from '../../contexts/ChallengesContext';

import styles from '../../styles/components/LevelUpModal.module.css';

export const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useChallengesContext();

  return (
    <div className={styles.overlay}>
      <div className={styles.levelUpModalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  )
}