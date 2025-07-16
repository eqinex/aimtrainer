import { memo, useContext } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { ColorModeContext } from '@/app/providers/ThemeProvider';
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeSwitcher = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const isDark = theme.palette.mode === 'dark';

    return (
        <FormControlLabel
            control={
                <Switch
                    checked={isDark}
                    onChange={colorMode.toggleColorMode}
                    color="default"
                />
            }
            label={isDark ? <DarkModeIcon /> : <LightModeIcon />}
            labelPlacement="start"
            sx={{
                ml: 1,
                userSelect: 'none',
                color: 'inherit',
            }}
        />
    );
};

export default memo(ThemeSwitcher);