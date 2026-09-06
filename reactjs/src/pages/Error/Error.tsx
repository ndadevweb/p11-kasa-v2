import { useEffect } from 'react';
import { NavLink } from 'react-router';
import styles from './Error.module.css';

export default function Error() {
  useEffect(() => {
    document.title = 'Erreur 404';
  }, []);

  return (
    <div className={styles.content}>
      <h1 className={styles.statusCode}>404</h1>
      <p className={styles.statusMessage}>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className={styles.link}>
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}
