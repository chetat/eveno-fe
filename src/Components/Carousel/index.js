import React, {useState} from "react";
import { Carousel } from 'react-bootstrap';
import Image from '../../Media/0.jpg';
import Image4 from '../../Media/4.jpg';
import Image1 from '../../Media/1.jpg';
import Image2 from '../../Media/2.jpg';

import './styles.css'

const CarouselHero = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  

  return (
    <div className="caro mt-4">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="caro">
        <img
        className="d-block w-100"
          src={Image1}
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
          src={Image2}
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
          src={Image4}
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