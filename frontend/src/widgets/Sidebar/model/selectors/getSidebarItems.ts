import { SidebarItemType } from '../types/sidebar';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { RoutePath } from '@/shared/config/routerConfig/routeConfig';

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.dashboard,
        Icon: HomeIcon,
        text: 'Dashboard',
    },
    {
        path: RoutePath.play,
        Icon: SportsEsportsIcon,
        text: 'Play',
    },
];