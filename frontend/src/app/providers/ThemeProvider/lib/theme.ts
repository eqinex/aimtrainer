import { createContext, useMemo, useState, useEffect } from 'react';
import { createTheme, PaletteMode } from '@mui/material';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useMode = (): [ReturnType<typeof createTheme>, { toggleColorMode: () => void }] => {
    const [mode, setMode] = useState<PaletteMode>('light');

    useEffect(() => {
        const saved = localStorage.getItem('theme') as PaletteMode;
        if (saved) setMode(saved);
    }, []);

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => {
                const next = prev === 'light' ? 'dark' : 'light';
                localStorage.setItem('theme', next);
                return next;
            });
        },
    }), []);

    const theme = useMemo(() =>
        createTheme({
            palette: {
                mode,
            },
        }), [mode]);

    return [theme, colorMode];
};