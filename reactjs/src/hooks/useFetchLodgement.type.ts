import type { LodgementType } from '../types/Lodgement.type';

type UseFetchLodgementResult = {
  lodgements: LodgementType[];
  isLoading: boolean;
  error: string | null;
};

export type { UseFetchLodgementResult };
