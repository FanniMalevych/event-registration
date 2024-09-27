import { Box, Card, CardContent, Typography } from "@mui/material"

export default function ParticipantCard ({id, fullName, email}) {
    return (
        <Box m={2} key={id}>
            <Card sx={{ width: 345 }} >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {fullName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {email}
                    </Typography>
                    </CardContent>
            </Card>
        </Box>
    )
}