import type { LodgementType } from '../../../types/Lodgement.type';

type CardProps = Pick<LodgementType, 'id' | 'title' | 'cover' | 'location'>;

export type { CardProps };
