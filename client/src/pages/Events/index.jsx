import { useEffect, useState } from "react"
import axios from 'axios'
import EventCard from "../../components/EventCard"
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Events () {
    const [events, setEvents] = useState([])
    const [sortType, setSortType] = useState('title');
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(2);

    const fetchMoreData = () => {
        axios
        .get(`/api/events?page=${page}`)
        .then((res) => {
            setEvents((prevItems) => [...prevItems, ...res.data]);
            res.data.length > 0 ? setHasMore(true) : setHasMore(false);
        })
        .catch((err) => console.log(err));
        setPage((prev) => prev + 1);
    };

    useEffect(() => {
        axios.get(`/api/events?page=1`).then((resp) => {
            setEvents(resp.data)
           })  
    },[])

    useEffect(() => {
        const sortArray = type => {
          const types = {
            title: 'title',
            organizer: 'organizer',
            date: 'date',
          };
          const sortProperty = types[type];
          const sorted = [...events].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
      
          setEvents(sorted);
        };
    
        sortArray(sortType);
      }, [sortType]); 
   
    
    return <>
    <Typography align="center" variant="h2" mt={10}>List of events</Typography>
    <Box sx={{ minWidth: 120, m: 5}}>
      <FormControl>
        <Typography>sort by: </Typography>
        <Select
          id="sort"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <MenuItem value={'title'}>Title</MenuItem>
          <MenuItem value={'organizer'}>Organizer</MenuItem>
          <MenuItem value={'date'}>Date</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <InfiniteScroll
      dataLength={events.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Typography>Loading...</Typography>}
      endMessage={<Typography>No more data to load.</Typography>}
    >
      <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {events.map(event => <EventCard 
                            key={event._id} 
                            title={event.title} 
                            description={event.description}
                            organizer={event.organizer}
                            date={event.date}
                            id={event._id}/>)}
      </Box>
      </InfiniteScroll>
    </>
}