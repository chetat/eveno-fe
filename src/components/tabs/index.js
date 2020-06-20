import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EventCard from '../../components/EventCard';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchEvents } from '../../actions/eventsAction';
import Skeleton from '@material-ui/lab/Skeleton';
import { fetchEventsTypes } from '../../actions/eventsTypes';


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabLabel: {
    fontSize: '0.75rem'
  },
}));

const CategoriesTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch()
  const events = useSelector(state => state.events.events)
  const eventTypes = useSelector(state => state.eventsType.eventsType)
  console.log(eventTypes)

  useEffect(()=>{
      dispatch(fetchEvents())
  },[])

  useEffect(() => {
    dispatch(fetchEventsTypes())
  }, [])
  return (
    <div className={classes.root}>
      <div className={classes.tabTitles}>
        <Tabs value={value} onChange={handleChange} aria-label="Events Tabs" variant="scrollable" >

          <Tab label={<span className={classes.tabLabel}>All</span>} {...a11yProps(0)}/>
          
          {eventTypes && eventTypes.length > 0 ? eventTypes.map((type, index) => {
            return <Tab label={type.name} {...a11yProps(index)} key={index}/>
          }) : null }
          
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
            {events && events.length > 0 ? events.map((event, index) => (
              <Grid item lg={3} key={index}>
                    <EventCard {...event} />
              </Grid>
            )) :  <Skeleton variant="rect" width={210} height={118} /> }
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={2}>
            {events && events.length > 0 ? events.map((event, index) => (
              <Grid item lg={3} key={index}>
                    <EventCard {...event} />
              </Grid>
            )) :  <Skeleton variant="rect" width={210} height={118} /> }
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
        {value}
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid container spacing={2}>
          {events && events.length > 0 ? events.map((event, index) => (
             <Grid item lg={3} key={index}>
               
                  <EventCard {...event} />
             </Grid>
          )) :  <Skeleton variant="rect" width={210} height={118} /> }
        </Grid>
      </TabPanel>
    </div>
  );
}

export default CategoriesTabs;