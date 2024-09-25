import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../BackButton";
import axios from "axios";

export default function RegistrationForm () {
    const navigate = useNavigate();
    const param = useParams()

    const [value, setValue] = useState('social_media');
    const [date, setDate]= useState(dayjs(new Date()))

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post(`/api/events/${param.id}`, {
            email: data.get('email'),
            fullName: data.get('name'),
            details: data.get('detail'),
            birthDate: data.get('date'),
            eventId: param.id
        })
        navigate('/')
      };

    return (
        <>
        <BackButton/>
       
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Typography component="h1" variant="h5" mt={5}>
              Register for the event
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="Full Name"
                id="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                
              />
             <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker 
                    disableFuture 
                    name='date'
                    label="Date of birth" 
                    value={date}
                    onChange={(val) => setDate(val)}/>
                </DemoContainer>
             </LocalizationProvider>
            <Box mt={2}>
             <FormControl >
                <FormLabel>Where did you hear about this event</FormLabel>
                <RadioGroup
                    defaultValue="social_media"
                    name="detail"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    sx={{ my: 1 }}
                >
                    <FormControlLabel value="social_media" control={<Radio />} label="Social media" />
                    <FormControlLabel value="friends" control={<Radio />} label="Friends" />
                    <FormControlLabel value="found_myself" control={<Radio />} label="Found myself" />
                </RadioGroup>
                </FormControl>
                </Box>
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              </Box>
              </Box>
              </Grid>
        </>
    )
}