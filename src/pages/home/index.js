import React from 'react';
import Button from '@material-ui/core/Button'
import image from '../../media/events_home.jpg'
import './styles.css'


const Home = () => {
    return (
        <div className="hero-section grid-container">
            <div className="hero-text-section">
                <h1 className="hero-title">View Events in your Area</h1>
                <Button>
                    Explore Events
                </Button>
            </div>
            <div className="hero-image-section">
                <img src={image} alt="Event" width="700"/>
            </div>
        </div>
    )
};

export default Home;