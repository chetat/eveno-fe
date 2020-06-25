import React from 'react';
import { Container, Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';
import Skeleton from '@material-ui/lab/Skeleton';


const EventCard = (props) => {
  const { title, image_url, start_date, id , description } = props;
  console.log(props)
  return (
    <Card>
    <Card.Img variant="top" src={image_url} />
    <Card.Body>
      <Card.Title className="event-title">{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{start_date}</small>
    </Card.Footer>
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