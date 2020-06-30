import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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
            {eventTypes.length > 0 ? eventTypes.slice(0, 6).map((eType, index) => (

                    <Card className="bg-dark text-white col-lg-4" key={index}>
                                        <Link to={"/categories/" + eType.id + "/" + eType.name} style={{ "textDecoration": "none", "color": "inherit" }}>

                        <Card.Img src={eType.image} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className="stretched-link">{eType.name}</Card.Title>
                            <Card.Text>
                                {eType.description}
                            </Card.Text>
                        </Card.ImgOverlay>
                        </Link>

                    </Card>
            )) :
                <div>
                    <Skeleton variant="text" />
                    <Skeleton variant="circle" width={40} height={40} />
                    <Skeleton variant="rect" width={300} height={218} />
                </div>
            }

        </div>

    );
}

export default CategoryCard;