import { useState } from 'react';
import styles from './Dropdown.module.css';
import arrowTop from '../../assets/icons/arrow-top.svg';
import type { DropdownProps, DropdownStatusType, DropdownStyleType } from './Dropdown.types';

export default function Dropdown({ isDefaultExpanded, title, optionStyle, children }: DropdownProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(isDefaultExpanded ?? false);
  const status: DropdownStatusType = isExpanded === true ? 'open' : 'close';
  const optionStyleDefault: DropdownStyleType = optionStyle || 'thin';

  function handleExpanded(): void {
    setIsExpanded(isExpanded === true ? false : true);
  }

  return (
    <section className={`${styles.dropdown + ' ' + styles[status] + ' ' + styles[optionStyleDefault]}`}>
      <h3 className={styles.title}>
        {title}
        <button type="button" onClick={handleExpanded} className={styles.buttonChangeStatus}>
          <img src={arrowTop} alt={status === 'open' ? 'close' : 'open'} className={styles[status]} />
        </button>
      </h3>
      <article className={styles.content}>{children}</article>
    </section>
  );
}
