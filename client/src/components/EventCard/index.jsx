import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from "react-router-dom";

export default function EventCard ({title, description, date, organizer, id}) {
    
    return (
        <Card sx={{ width: 345 }} style={{margin: '20px'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Organizer: {organizer}
          </Typography>
          <Typography variant="body2" color="text.secondary" display='flex' alignItems='center' justifyContent='space-between' p={2}>
           <CalendarMonthIcon/> {new Date(date).toDateString()}
          </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
          <Link to={`/register/${id}`}><Button size="small" >Register</Button></Link>
          <Link to={`/detail/${id}`}><Button size="small" >View More</Button></Link>
        </CardActions>
      </Card>
    )
}