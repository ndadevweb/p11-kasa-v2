import starFill from '../../assets/icons/star-fill.svg';
import starEmpty from '../../assets/icons/star-empty.svg';
import classes from './Rating.module.css';
import type { RatingProps } from './Rating.types';

export default function Rating({ rating }: RatingProps) {
  function buildRating(rating: number) {
    const MAX = 5;

    return Array.from({ length: MAX }).map((_, index) => <img src={rating > index ? starFill : starEmpty} key={index} alt="" />);
  }

  return <div className={classes.rating}>{buildRating(rating)}</div>;
}
