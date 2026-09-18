import React from 'react';
import { Navbar, Container, Nav, Card, Button, Badge } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import Carousel from 'react-bootstrap/Carousel';

// 1. Export HeaderBanner riêng ra ngoài
export function HeaderBanner() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center bg-dark pe-3">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Pizza House</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About Us</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="d-flex align-items-center">
          <input type="text" className="form-control me-2" placeholder="Search..." />
          <span className="input-group-text bg-danger text-white"><CiSearch /></span>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img 
            src="https://cdn.babyseo.ai/images/foodshot.ai/pizza-shop-photos/pizza-shop-photos-styling-behind-the-scenes-hero.webp"
            alt="First slide"
            className="d-block w-100"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="text-start">
            <h3>Neapolitan Pizza</h3>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

// 2. Component Exsercise10 đóng vai trò là Pizza Card
function Exsercise10({ pizza }) {
  if (!pizza) return null;

  return (
    <Card className="bg-light text-dark h-100 shadow-sm position-relative">
      {pizza.badge && (
        <Badge 
          bg="warning" 
          className="position-absolute top-0 start-0 m-2 text-dark fw-bold"
          style={{ zIndex: 1 }}
        >
          {pizza.badge}
        </Badge>
      )}

      <Card.Img 
        variant="top" 
        src={pizza.image} 
        style={{ height: '180px', objectFit: 'cover' }} 
      />
      
      <Card.Body className="d-flex flex-column justify-content-between text-center">
        <div>
          <Card.Title className="fs-6 fw-bold">{pizza.name}</Card.Title>
          <Card.Text className="text-muted small">
            ${pizza.cost}
          </Card.Text>
        </div>
        <Button variant="dark" className="w-100 mt-2">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Exsercise10;