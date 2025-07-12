import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import { Footer } from "@/widgets/Footer";
import { useState } from "react";

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    return (
        <>
            <Header onToggleSidebar={toggleSidebar} />
            <Box display="flex" minHeight="100vh">
                <Sidebar open={sidebarOpen} />
                <Box component="main" flexGrow={1} p={3}>
                    <Outlet />
                </Box>
            </Box>
            <Footer/>
        </>
    );
};

export default App;
