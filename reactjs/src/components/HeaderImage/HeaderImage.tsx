import type { HeaderImageProps } from './HeaderImage.types';
import styles from './HeaderImage.module.css';

export default function HeaderImage({ image, title, imageAlternativeText, customClasses }: Readonly<HeaderImageProps>) {
  const headerCustomClasses = styles.headerImage + ' ' + customClasses.map((customClass) => styles[customClass]).join('');

  return (
    <header className={headerCustomClasses}>
      {title && <h3>{title}</h3>}
      <img src={image} alt={imageAlternativeText} />
    </header>
  );
}
