import { NavLink } from 'react-router';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className={styles.headerPrimary}>
      <NavLink to="/">
        <Logo type="primary" isResponsive={true} />
      </NavLink>
      <Navigation />
    </header>
  );
}
