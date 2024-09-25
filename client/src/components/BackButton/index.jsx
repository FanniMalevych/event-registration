import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackButton () {
    const navigate = useNavigate();
    
    return (
        <Box textAlign='left' position='absolute' left='10px' top='10px'>
            <Button variant="contained" onClick={() => navigate('/')}><ArrowBackIcon fontSize="large"/></Button>
        </Box>
    )
}