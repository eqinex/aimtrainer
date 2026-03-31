import {Box, Typography } from '@mui/material';

const PlayPage = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            height="100%"
        >
            <Typography variant="h4" gutterBottom>
                Aim Trainer
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Нажми на мишени как можно быстрее!
            </Typography>

            {/* Игровая зона будет добавлена здесь */}
            <Box
                id="aim-area"
                sx={{
                    position: 'relative',
                    mt: 4,
                    width: 600,
                    height: 400,
                    border: '2px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    overflow: 'hidden',
                    backgroundColor: 'background.paper',
                }}
            >
                {/* Цели будут появляться здесь */}
            </Box>
        </Box>
    );
};

export default PlayPage;