import React from 'react';
import Paper from '@material-ui/core/Paper'
import image from '../../media/events_home.jpg'


const HeroImage = () => {
    return (
        <div className="hero-image">
            <Paper elevation={3} >
                <img src={image} alt="Home Events" />
            </Paper>

        </div>
    )
}

export default HeroImage;