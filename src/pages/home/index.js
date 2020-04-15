import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import styles from './styles'
import Container from '@material-ui/core/Container';
import image from '../../media/events_home.jpg'
import CategoriesTabs from '../../components/tabs';


const Home = () => {
    const classes = styles()
    return (
        <React.Fragment>
        <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <div className={classes.heroTextSection}>
                    <h1 className={classes.heroTitle}>View Events in your Area</h1>
                    <Button>
                        Explore Events
                    </Button>
                </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.heroImageSection}>

            </Grid>
        </Grid>
        <CategoriesTabs />
        </Container>
\
        </React.Fragment>
    )
};

export default Home;