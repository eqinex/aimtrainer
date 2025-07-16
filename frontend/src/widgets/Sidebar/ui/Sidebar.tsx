import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import { memo } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { sidebarItemsList } from "../model/selectors/getSidebarItems";
import {
    COLLAPSED_WIDTH,
    EXPANDED_WIDTH,
    SidebarItemType
} from "../model/types/sidebar";
import logo from '/logo.svg';
import { useTheme } from "@mui/material/styles";

interface SidebarProps {
    collapsed: boolean
}

const Sidebar = (props: SidebarProps) => {
    const {
        collapsed = false
    } = props;

    const theme = useTheme();

    return (
        <Drawer
            variant="permanent"
            open={!collapsed}
            sx={{
                width: collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
                    transition: 'width 0.3s',
                    overflowX: 'hidden',
                    bgcolor: 'background.paper',
                },
            }}
        >
            <Toolbar
                sx={{
                    bgcolor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    px: collapsed ? 1 : 2,
                    userSelect: 'none',
                    fontWeight: 'bold',
                }}
            >
                {collapsed ? (
                    <Box component="img" src={logo} alt="Logo" sx={{ height: 32, width: 32 }} />
                ) : (
                    <Typography variant="h6" noWrap>
                        AimTrainer
                    </Typography>
                )}
            </Toolbar>
            <Divider />
            <List>
                {sidebarItemsList.map(({ path, Icon, text }: SidebarItemType) => (
                    <ListItem key={path} disablePadding>
                        <ListItemButton
                            component={RouterLink}
                            to={path}
                            sx={{
                                height: 48,
                                px: 2,
                                transition: 'padding 0.3s',
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: collapsed ? 'auto' : 2,
                                    justifyContent: 'center',
                                    transition: 'margin 0.3s',
                                }}
                            >
                                <Icon />
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                                sx={{
                                    opacity: collapsed ? 0 : 1,
                                    maxWidth: collapsed ? 0 : '200px',
                                    transition: 'opacity 0.3s, max-width 0.3s',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                }}
                            />
                        </ListItemButton>
                    </ListItem>

                ))}
            </List>
        </Drawer>
    );
};

export default memo(Sidebar);