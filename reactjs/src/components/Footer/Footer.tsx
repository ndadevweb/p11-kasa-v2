import Logo from '../Logo/Logo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <Logo type="secondary" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
