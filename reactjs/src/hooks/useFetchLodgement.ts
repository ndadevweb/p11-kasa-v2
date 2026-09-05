import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../api/endpoints';
import { throwErrorIfTrue } from '../utils/utils';
import type { LodgementType } from '../types/Lodgement.type';
import type { UseFetchLodgementResult } from './useFetchLodgement.type';

export function useFetchLodgement(): UseFetchLodgementResult {
  const [lodgements, setLodgements] = useState<LodgementType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchLodgement() {
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));

      try {
        const response = await fetch(API_ENDPOINTS.FETCH_LODGEMENT, {
          signal: controller.signal,
        });

        throwErrorIfTrue(response.ok === false, 'Whoops ! Something is wrong !');

        const lodgementFetched = await response.json();
        setLodgements(lodgementFetched);
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') {
          return;
        }

        setError('Whoops ! Something is wrong !' + e);
      } finally {
        if (controller.signal.aborted === false) {
          setIsLoading(false);
        }
      }
    }

    fetchLodgement();

    return () => controller.abort();
  }, []);

  return { lodgements, isLoading, error };
}
