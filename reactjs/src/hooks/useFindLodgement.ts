import { useEffect, useState } from 'react';
import type { UseFindLodgement } from './useFindLodgement.type';
import type { LodgementType } from '../types/Lodgement.type';
import { API_ENDPOINTS } from '../api/endpoints';
import { throwErrorIfTrue } from '../utils/utils';

export function useFindLodgement(id: string | undefined): UseFindLodgement {
  const [lodgement, setLodgement] = useState<LodgementType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  function filterLodgementById(lodgementsData: LodgementType | LodgementType[], id: string): LodgementType | null {
    const data: LodgementType[] = Array.isArray(lodgementsData) ? lodgementsData : [lodgementsData];

    return data.find((lodgementData) => lodgementData.id === id) ?? null;
  }

  useEffect(() => {
    const controller = new AbortController();

    async function findLodgement() {
      try {
        if (id === undefined) {
          throwErrorIfTrue(true, 'Lodgement not found');

          return;
        }

        await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));

        const response = await fetch(API_ENDPOINTS.FIND_LODGEMENT, {
          signal: controller.signal,
        });

        throwErrorIfTrue(response.ok === false, 'Whoops ! Something is wrong !');

        const lodgementFound = await response.json();
        const lodgementData = filterLodgementById(lodgementFound, id);

        setLodgement(lodgementData);
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') {
          return;
        }

        setError('Whoops ! Something is wrong !');
      } finally {
        if (controller.signal.aborted === false) {
          setIsLoading(false);
        }
      }
    }

    findLodgement();

    return () => controller.abort();
  }, [id]);

  return {
    lodgement,
    isLoading,
    error,
  };
}
