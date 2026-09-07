import classes from './Tag.module.css';
import type { TagProps } from './Tag.types';

export default function Tag({ name }: TagProps) {
  return <span className={classes.tag}>{name}</span>;
}
