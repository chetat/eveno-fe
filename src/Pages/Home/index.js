import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styles from './styles';
import Container from '@material-ui/core/Container';
import image from '../../media/events_home.jpg'
import CategoriesTabs from '../../Components/tabs';
import Navbar from '../../Containers/Navbar'

const Home = () => {
 

    const classes = styles()
    return (
        <React.Fragment>
           <Navbar />

            <Container>
                <Grid container spacing={2} className={classes.heroGridContainer}>
                    <Grid item xs={12} md={6} className={classes.heroImageSection}>
                        <img src={image} alt="" className={classes.heroImage} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} className={classes.heroText}>
                        <h1 className={classes.heroTitle}>Explore Online Events</h1>
                        <Button className={classes.heroBtn}>
                            Explore Events
                </Button>
                    </Grid>

                </Grid>
            </Container>
            <Container>
            <div>
                <h2 className={classes.subhero}>Popular events <span className={classes.subheroSpan}>around the world</span></h2>
            </div>
                <CategoriesTabs />
            </Container>
           
        </React.Fragment>
    )
};

export default Home;