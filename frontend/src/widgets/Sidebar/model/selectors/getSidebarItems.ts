import { SidebarItemType } from '../types/sidebar';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { RoutePath } from '@/shared/config/routerConfig/routeConfig';

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.dashboard,
        Icon: HomeIcon,
        text: 'Dashboard',
    },
];