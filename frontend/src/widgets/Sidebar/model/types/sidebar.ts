import { SvgIconComponent } from '@mui/icons-material';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: SvgIconComponent;
}

export const COLLAPSED_WIDTH = 60;
export const EXPANDED_WIDTH = 240;
