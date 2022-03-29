import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./newsitem.css"

export default function Header() {
  return (
    <Navbar>
        <Container>
        
  <Navbar  bg="dark" variant="dark col-12" id="mynav" >
    <Container>
    <Navbar.Brand ><Link className="nav-link my-nav" to="/"> News </Link></Navbar.Brand>
    <Nav className="me-auto">
      <Link className="nav-link text-light" to="/weatherlist">Weather</Link>
      <Link className="nav-link text-light"  to="/sportlist">Sport</Link>
      <Link className="nav-link text-light"  to="/technologylist">Technology</Link>
      <Link className="nav-link text-light"  to="/travellist">Travel</Link>
    </Nav>
   
    </Container>
  </Navbar>
  
  

  
  

        </Container>
    </Navbar>
  )
}