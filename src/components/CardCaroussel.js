import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function CardCarousel() {
        return (
            <Carousel>
                <Card style={{ width: "18rem" }} className="m-4">
          <Card.Img variant="top" src={'/images/image-taxi1.jpeg'} />
          <Card.Body>
            <Card.Title className="text-primary">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary"><a href="#" className="text-white">Payer son impot</a></Button>
          </Card.Body>
        </Card>
                
        <Card.Img variant="top" src={'/images/image-tata2.jpeg'} />
          <Card.Body>
            <Card.Title className="text-primary">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary"><a href="#" className="text-white">Payer son impot</a></Button>
          </Card.Body>

          <Card.Img variant="top" src={'/images/image-jakarta2.jpeg'} />
          <Card.Body>
            <Card.Title className="text-primary">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary"><a href="#" className="text-white">Payer son impot</a></Button>
          </Card.Body>

          <Card.Img variant="top" src={'/images/image-taf-taf.jpeg'} />
          <Card.Body>
            <Card.Title className="text-primary">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary"><a href="#" className="text-white">Payer son impot</a></Button>
          </Card.Body>   

            </Carousel>
        );
    
};

