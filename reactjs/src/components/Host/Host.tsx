import styles from './Host.module.css';
import type { HostProps } from './Host.types';

export default function Host({ name, picture }: HostProps) {
  return (
    <div className={styles.user}>
      <p className={styles.fullName}>{name}</p>
      <img src={picture} className={styles.picture} alt="Housing Host" />
    </div>
  );
}
