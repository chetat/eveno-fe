import React, {useState} from "react";
import { Carousel } from 'react-bootstrap';
import Image from '../../Media/events_home.jpg'
import './styles.css'

const CarouselHero = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  

  return (
    <div className="caro">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="caro">
        <img
        className="d-block w-100"
          src={Image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro">
        <img
        className="d-block w-100"
          src={Image}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro">
        <img
          className="d-block w-100"
          src={Image}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselHero;