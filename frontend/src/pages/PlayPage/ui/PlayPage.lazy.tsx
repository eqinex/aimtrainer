import { lazy } from 'react';

export const LazyPlayPage = lazy(async () => await import('./PlayPage'));
