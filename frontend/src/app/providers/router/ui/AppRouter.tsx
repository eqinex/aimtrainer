import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, AppRoutesProps } from '@/shared/config/routerConfig/routeConfig';
import App from '@/App';

const AppRouter = () => {
    const renderRoute = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<div>Loading...</div>}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <div>{element}</div> : element} // можно вставить <RequireAuth> позже
            />
        );
    }, []);

    return <Routes>
        <Route element={<App />}>
            {Object.values(routeConfig).map(renderRoute)}
        </Route>
    </Routes>;
};

export default memo(AppRouter);