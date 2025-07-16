import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import {
    COLLAPSED_WIDTH,
    EXPANDED_WIDTH,
    Sidebar
} from "@/widgets/Sidebar";
import { Footer } from "@/widgets/Footer";
import { useState } from "react";

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <>
            <Header
                onToggleSidebar={toggleSidebar}
                collapsed={collapsed}
            />
            <Box display="flex" minHeight="100vh">
                <Sidebar collapsed={collapsed} />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: `calc(100% - ${collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH}px)`,
                        transition: 'width 0.3s',
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
            <Footer/>
        </>
    );
};

export default App;
