import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, IconButton, Toolbar, Typography, useTheme} from '@mui/material';
import { memo } from "react";
import {COLLAPSED_WIDTH, EXPANDED_WIDTH} from "@/widgets/Sidebar";

interface HeaderProps {
    onToggleSidebar: () => void;
    collapsed: boolean;
}

const Header = (props: HeaderProps) => {
    const {
        onToggleSidebar,
        collapsed = false
    } = props;

    const theme = useTheme();

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                bgcolor: theme.palette.background.default,
                color: theme.palette.text.primary,
                width: `calc(100% - ${collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH}px)`,
                ml: `${collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH}px`,
                transition: 'margin 0.3s, width 0.3s',
                borderBottom: `1px solid ${theme.palette.divider}`,
            }}
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={onToggleSidebar}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ ml: 'auto' }}>
                    <ThemeSwitcher />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default memo(Header);