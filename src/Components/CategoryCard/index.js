import React from 'react';
import { Container, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchEvents } from '../../Actions/eventsAction';
import Skeleton from '@material-ui/lab/Skeleton';
import { fetchEventsTypes } from '../../Actions/eventsTypes';

const CategoryCard = (props) => {
    const dispatch = useDispatch()
    const eventTypes = useSelector(state => state.eventsType.eventsType)


    useEffect(() => {
        dispatch(fetchEventsTypes())
    }, [])

    return (
        <div className="card-deck">
            {eventTypes.length > 0 ? eventTypes.map((eType, index) => (
                <Card className="bg-dark text-white col-lg-4" key={index}>
                    <Card.Img src={eType.image} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>{eType.name}</Card.Title>
                        <Card.Text>
                            {eType.description}
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            )) : <Skeleton variant="rect" width={210} height={118} />}

        </div>

    );
}

export default CategoryCard;