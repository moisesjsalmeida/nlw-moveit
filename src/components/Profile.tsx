import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { session, useSession } from 'next-auth/client';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const [session, loading] = useSession();
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={session.user.image} alt="Moisés Almeida" />
      <div>
        <strong>{session.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
