import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { PropsWithChildren } from 'react';
import { ColorModeContext, useMode } from '../lib/theme';

const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ThemeProvider;