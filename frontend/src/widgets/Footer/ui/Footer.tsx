import { Box, Typography } from '@mui/material';
import { memo } from "react";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                textAlign: 'center',
                borderTop: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default',
            }}
        >
            <Typography variant="body2" color="text.secondary">
                &copy; {new Date().getFullYear()} AimTrainer. All rights reserved.
            </Typography>
        </Box>
    );
};

export default memo(Footer);