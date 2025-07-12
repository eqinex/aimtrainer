import { lazy } from 'react';

export const LazyDashboardPage = lazy(async () => await import('./DashboardPage'));
