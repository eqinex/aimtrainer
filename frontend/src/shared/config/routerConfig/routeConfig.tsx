import { RouteProps } from 'react-router-dom';
import { DashboardPage } from '@/pages/DashboardPage';
import { ReactNode } from "react";
import HomeIcon from '@mui/icons-material/Home';

export enum AppRoutes {
    DASHBOARD = 'dashboard',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.DASHBOARD]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    icon?: ReactNode;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.DASHBOARD]: {
        path: RoutePath.dashboard,
        element: <DashboardPage />,
        icon: <HomeIcon />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <div>Page Not Found</div>,
    },
};