import { useState } from 'react';
import type { SlideshowProps } from './Slideshow.types';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import styles from './Slideshow.module.css';

export default function Slideshow({ pictures }: SlideshowProps) {
  const [pictureIndexActive, setPictureIndexActive] = useState<number>(0);

  const PICTURES_TOTAL = pictures.length;
  const MIN_INDEX = 0;
  const MAX_INDEX = PICTURES_TOTAL - 1;
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';

  function handleChangePicture(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { direction } = event.currentTarget.dataset;
    let newIndex = 0;

    if (direction === DIRECTION_LEFT) {
      newIndex = pictureIndexActive === MIN_INDEX ? MAX_INDEX : pictureIndexActive - 1;
    } else if (direction === DIRECTION_RIGHT) {
      newIndex = pictureIndexActive === MAX_INDEX ? MIN_INDEX : pictureIndexActive + 1;
    }

    setPictureIndexActive(newIndex);
  }

  function getPictureNumber(index: number) {
    return index + 1;
  }

  return (
    <aside className={styles.slideshow} data-has-many-images={PICTURES_TOTAL > 1}>
      {pictures.map((picture, index) => {
        const classNameIsActive = index === pictureIndexActive ? styles.active : '';

        return <img src={picture} alt={picture} className={styles.picture + ' ' + classNameIsActive} key={index} />;
      })}

      <span className={styles.pictureStep}>{`${getPictureNumber(pictureIndexActive) + '/' + PICTURES_TOTAL}`}</span>

      <button type="button" className={styles.buttonLeft} data-direction={DIRECTION_LEFT} onClick={(event) => handleChangePicture(event)}>
        <img src={arrowLeft} alt="Left >" />
      </button>

      <button type="button" className={styles.buttonRight} data-direction={DIRECTION_RIGHT} onClick={(event) => handleChangePicture(event)}>
        <img src={arrowRight} alt="< Right" />
      </button>
    </aside>
  );
}
