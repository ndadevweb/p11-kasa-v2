import type { ReactNode } from 'react';

type DropdownProps = {
  isDefaultExpanded?: boolean;
  title: string;
  optionStyle?: DropdownStyleType;
  children: ReactNode;
};

type DropdownStatusType = 'open' | 'close';

type DropdownStyleType = 'thin' | 'large';

export type { DropdownProps, DropdownStatusType, DropdownStyleType };
