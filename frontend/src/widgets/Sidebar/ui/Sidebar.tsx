import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import { memo } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { sidebarItemsList } from "../model/selectors/getSidebarItems";
import { SidebarItemType } from "../model/types/sidebar";

interface SidebarProps {
    open: boolean
}

const COLLAPSED_WIDTH = 60;
const EXPANDED_WIDTH = 240;

const Sidebar = (props: SidebarProps) => {
    const {
        open = true
    } = props;

    return (
        <Box
            component="nav"
            sx={{
                width: open ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
                flexShrink: 0,
                bgcolor: 'background.paper',
                borderRight: '1px solid',
                borderColor: 'divider',
                height: '100vh',
                position: 'sticky',
                top: 0,
                transition: 'width 0.3s ease-in-out',
                overflowX: 'hidden'
            }}
        >
            <List>
                {sidebarItemsList.map(({ path, Icon, text }: SidebarItemType) => (
                    <ListItem key={path} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            component={RouterLink}
                            to={path}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 2 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <Icon />
                            </ListItemIcon>
                            {open && <ListItemText primary={text} />}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );
};

export default memo(Sidebar);