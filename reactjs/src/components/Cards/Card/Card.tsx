import { NavLink } from 'react-router';
import styles from './Card.module.css';
import type { CardProps } from './Card.type';

export default function Card({ id, title, cover, location }: CardProps) {
  return (
    <article className={styles.card}>
      <NavLink end to={`/lodgement/${id}`}>
        <h3>
          <span>{title}</span>
        </h3>
        <img src={cover} alt={location} />
      </NavLink>
    </article>
  );
}
