import { useState } from 'react';
import { INITIAL_AFFILIATE } from '../data/mockAffiliate';

// ponytail: búsqueda simulada; reemplazar el setTimeout por la llamada a la API real
export function useAffiliateSearch() {
  const [affiliate, setAffiliate] = useState(null);
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const search = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setAffiliate({ ...INITIAL_AFFILIATE, exequatur: query.trim().toUpperCase() });
    }, 250);
  };

  return { affiliate, query, setQuery, isSearching, search };
}
