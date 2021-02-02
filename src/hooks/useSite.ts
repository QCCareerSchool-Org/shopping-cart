import { useEffect, useState } from 'react';

import { getSite, Site } from '../lib/getSite';
import { useHostname } from './useHostname';

/**
 * Returns the site ('makeup', 'event', 'design', etc.) based on the current hostname
 */
export const useSite = (): Site | null => {
  const hostname = useHostname();
  const [ site, setSite ] = useState<Site | null>(getSite(hostname));

  useEffect(() => {
    setSite(getSite(hostname));
  }, [ hostname ]);

  return site;
};
