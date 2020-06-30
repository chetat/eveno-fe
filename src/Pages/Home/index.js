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
import { Button } from 'react-bootstrap';

import './styles.css'
import Footer from '../../Containers/Footer';

const Home = () => {
    const dispatch = useDispatch()
    const events = useSelector(state => state.events.events)

    useEffect(() => {
        dispatch(fetchEvents())
    }, [])

    useEffect(() => {
        dispatch(fetchEventsTypes())
    }, [])

    return (
        <div>
            <div>
                <AppBar />
                <Container>
                    <CarouselHero />
                    <h3 className="section-title">Popular Events Around you </h3>

                    <div className="card-columns">
                        {events && events.length > 0 ? events.slice(0, 6).map((event, index) => (
                            <EventCard {...event} key={index} />
                        )) :
                            <div>
                                <Skeleton variant="text" />
                                <Skeleton variant="circle" width={40} height={40} />
                                <Skeleton variant="rect" width={210} height={118} />
                            </div>
                        }
                    </div>
                    <div className="view-more-btn my-5">
                        <Button variant="outline-dark" href="/events/all" size="md" block>View More Events</Button>
                    </div>
                    <h3 className="section-title">Events Categories </h3>
                    <CategoryCard />
                    <div className="view-more-btn my-5">
                        <Button variant="outline-dark" href="/categories/all" size="md" block>View All Categories</Button>
                    </div>

                </Container>
            </div>
            <Footer />

        </div>
    )
};

export default Home;