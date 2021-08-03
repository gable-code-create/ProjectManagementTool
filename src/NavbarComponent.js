import React, { useState } from 'react';
import {Navbar, Container, Button, Nav, Col, Row} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {GiGearHammer} from 'react-icons/gi';



const NavbarComponent = (props) => {


  return (
   

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand href="#home">
      
        <GiGearHammer className="brand_icon"/>
       
      
        Project Management Tool</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav >
        <Nav.Item>
        <Button className="navbutton">Sign in</Button>
        </Nav.Item>
        <Nav.Item>
        <Button className="navbutton">Sign up</Button>
        </Nav.Item>
         
         

        </Nav>
       
      </Navbar.Collapse>
  
    </Container>
  </Navbar>
  
       
     
   

  );
}

export default NavbarComponent;