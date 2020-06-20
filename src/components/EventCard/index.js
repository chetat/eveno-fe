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
import {Link} from 'react-router-dom';
import styles from './styles'


const EventCard = (props) => {
  const { title, image_url, start_date, id } = props;
  const classes = styles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Link to={`events/details/${id}`} className="btn btn-primary">
        <CardMedia
          component="img"
          className={classes.media}
          image={image_url}
          title="Contemplative Reptile"
        />
        </Link>
      </CardActionArea>
      <CardContent>
        <Link to={`events/details/${id}`} className="btn btn-primary">
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </Link>
          <Typography variant="body2" color="textSecondary" component="p">
            {start_date}
          </Typography>
        </CardContent>
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