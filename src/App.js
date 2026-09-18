import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import cả Exsercise10 lẫn HeaderBanner từ cùng file Exsercise10.js
import Exsercise10, { HeaderBanner } from './Slot4/Exsercise10';

import img4 from "./images/p1.jpg";
import img5 from "./images/p2.jpg";
import img6 from "./images/p3.avif";
import img7 from "./images/p4.jpg";

function App() {
  const menu = [
    { id: 1, name: "Margherita Pizza", cost: "24.00", badge: "SALE", image: img4 },
    { id: 2, name: "Mushroom Pizza", cost: "25.00", badge: null, image: img5 },
    { id: 3, name: "Hawaiian Pizza", cost: "30.00", badge: "NEW", image: img6 },
    { id: 4, name: "Pesto Pizza", cost: "30.00", badge: "SALE", image: img7 },
  ];

  return (
    <div className="bg-dark min-vh-100 pb-5">
      {/* Gọi Header & Carousel nằm phía trên */}
      <HeaderBanner />

      {/* Đúng đoạn Container chứa menu của bạn nằm ở App.js */}
      <Container className="mt-4">
        <h2 className="mb-4 text-white">Our Menu</h2>
        <Row>
          {menu.map((pizza) => (
            <Col md={3} key={pizza.id} className="mb-4">
              <Exsercise10 pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <h2 className="text-center text-white mb-4">Book Your Table</h2>
        <form>
          <Row className='mb-3'>
            <Col md={4}>
              <Form.Control type="text" placeholder="Your Name *" />
            </Col>
            <Col md={4}>
              <Form.Control type="email" placeholder="Your Email *" />
            </Col>
            <Col md={4}>
              <Form.Select defaultValue="Select a Service">
                <option value="Select a Service">Please select a service</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3+ Persons</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Control as="textarea" rows={5} placeholder="Please write your comment" />
            </Col>
          </Row>

          <Button variant="warning" type="submit" className="text-white px-4 fw-bold">Send Message</Button>
        </form>
      </Container>
    </div>
  );
}

export default App;