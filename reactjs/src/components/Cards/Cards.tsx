import Card from './Card/Card';
import styles from './Cards.module.css';
import type { CardsProps } from './Cards.type';

export default function Cards({ lodgements }: CardsProps) {
  return (
    <div className={styles.cards}>
      {lodgements.length === 0 ? 'Pas de logement' : lodgements.map((lodgement) => <Card key={lodgement.id} {...lodgement} />)}
    </div>
  );
}
