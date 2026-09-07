import Tag from './Tag/Tag';
import styles from './Tags.module.css';
import type { TagsProps } from './Tags.types';

export default function Tags({ tags }: TagsProps) {
  return (
    <section className={styles.tags}>
      {tags.map((tag, index) => (
        <Tag name={tag} key={index} />
      ))}
    </section>
  );
}
