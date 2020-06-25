import React from 'react';
import CarouselHero from '../../Components/Carousel';
import { Container } from "react-bootstrap";
import EventCard from '../../Components/EventCard';
import CategoryCard from '../../Components/CategoryCard'
import AppBar from '../../Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchEvents } from '../../Actions/eventsAction';
import Skeleton from '@material-ui/lab/Skeleton';
import { fetchEventsTypes } from '../../Actions/eventsTypes';
import './styles.css'

const Home = () => {
    const dispatch = useDispatch()
    const events = useSelector(state => state.events.events)
    const eventTypes = useSelector(state => state.eventsType.eventsType)
    console.log(eventTypes)

    useEffect(() => {
        dispatch(fetchEvents())
    }, [])

    useEffect(() => {
        dispatch(fetchEventsTypes())
    }, [])
    return (
        <Container fluid>
            <AppBar />
            <Container>
                <CarouselHero />
                <h3 className="section-title">Popular Events Around you </h3>

                <div className="card-deck">
                    {events && events.length > 0 ? events.map((event, index) => (
                        <EventCard {...event} key={index}/>
                    )) : <Skeleton variant="rect" width={210} height={118} />}
                </div>
                <h3 className="section-title">Events Categories </h3>
                <CategoryCard />
            </Container>
        </Container>

    )
};

export default Home;