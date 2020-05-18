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

  console.log(events)

  useEffect(()=>{
      dispatch(fetchEvents())
  },[])

  return (
    <div className={classes.root}>
      <div className={classes.tabTitles}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="scrollable" >
          <Tab label={<span className={classes.tabLabel}>All</span>} {...a11yProps(0)}/>
          <Tab label="Food &amp; Drinks" {...a11yProps(1)} />
          <Tab label="Music" {...a11yProps(2)} />
          <Tab label="Software Development" {...a11yProps(3)} />
          <Tab label="Free" {...a11yProps(4)} />
          <Tab label="Charity &amp; Causes" {...a11yProps(4)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
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
          )) : <h1>Nothing{console.log("Nothing")}</h1> }
        </Grid>
      </TabPanel>
    </div>
  );
}

export default CategoriesTabs;