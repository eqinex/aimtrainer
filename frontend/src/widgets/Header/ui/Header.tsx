import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import { memo } from "react";

interface HeaderProps {
    onToggleSidebar: () => void;
}

const Header = (props: HeaderProps) => {
    const {
        onToggleSidebar,
    } = props;

    return (
        <AppBar
            position="static"
            elevation={0}
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
                <Typography variant="h6" component="div">
                    AimTrainer
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default memo(Header);