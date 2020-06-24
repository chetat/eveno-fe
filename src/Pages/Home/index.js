import React from 'react';
import CarouselHero from '../../Components/Carousel';
import { Container  } from "react-bootstrap";
import AppBar from '../../Components/Navbar';


const Home = () => {

    return (
        
        <Container fluid>
            <AppBar/>
        <CarouselHero />

        </Container>
    )
};

export default Home;