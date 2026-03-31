import { RouteProps } from 'react-router-dom';
import { DashboardPage } from '@/pages/DashboardPage';
import { PlayPage } from "@/pages/PlayPage";

export enum AppRoutes {
    DASHBOARD = 'dashboard',
    NOT_FOUND = 'not_found',
    PLAY = 'play',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.DASHBOARD]: '/',
    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.PLAY]: '/play',
};

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.DASHBOARD]: {
        path: RoutePath.dashboard,
        element: <DashboardPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <div>Page Not Found</div>,
    },
    [AppRoutes.PLAY]: {
        path: RoutePath.play,
        element: <PlayPage />,
    },
};