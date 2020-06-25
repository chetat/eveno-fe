import React from 'react';
import { Container, Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css'

const CategoryCard = (props) => {
    const dispatch = useDispatch()
    const events = useSelector(state => state.events.events)
    const eventTypes = useSelector(state => state.eventsType.eventsType)
    console.log(eventTypes)

    useEffect(() => {
        dispatch(fetchEvents())
    }, [])

    useEffect(() => {
        dispatch(fetchEventsTypes())
    }, [])

    return (
        <div>
            {events && events.length > 0 ? events.map((event, index) => (
                <Card key={index}>
                    <Card.Img variant="top" src={event.image_url} />
                    <Card.Body>
                        <Card.Title className="event-title">{event.title}</Card.Title>
                        <Card.Text>
                            {event.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{event.start_date}</small>
                    </Card.Footer>
                </Card>
            )) : <Skeleton variant="rect" width={210} height={118} />}

        </div>

    );
}

CategoryCard.propTypes = {
    props: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
        start_date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })
}

export default CategoryCard;