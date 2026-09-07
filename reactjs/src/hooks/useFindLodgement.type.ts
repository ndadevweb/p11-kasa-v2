import type { LodgementType } from '../types/Lodgement.type';

type UseFindLodgement = {
  lodgement: LodgementType | null;
  isLoading: boolean;
  error: string | null;
};

export type { UseFindLodgement };
