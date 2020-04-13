import React from 'react';
import Button from '@material-ui/core/Button'
import image from '../../media/events_home.jpg'
import styles from './styles'
import Container from '@material-ui/core/Container';
import CategoriesTabs from '../../components/tabs';


const Home = () => {
    const classes = styles()
    return (
        <React.Fragment>
        <Container>
        <div className={classes.gridContainer}>
            <div className={classes.heroTextSection}>
                <h1 className={classes.heroTitle}>View Events in your Area</h1>
                <Button>
                    Explore Events
                </Button>
            </div>
            <div className="hero-image-section">
                <img src={image} alt="Event" width="700"/>
            </div>
        </div>
        <CategoriesTabs />
        </Container>
\
        </React.Fragment>
    )
};

export default Home;