import { NavLink } from 'react-router';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navigationPrimary}>
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : '')}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" end className={({ isActive }) => (isActive ? styles.active : '')}>
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
