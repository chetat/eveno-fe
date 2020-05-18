import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import styles from './styles'


const EventCard = (props) => {
  const { title, image_url, start_date } = props;
  const classes = styles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {start_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <ShareIcon />
        </Button>
        <Button size="small" color="primary">
          <FavoriteIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

EventCard.propTypes = {
  props: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
}

export default EventCard;