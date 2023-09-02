import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";



const Sidebar = () => (
  
  <Navbar sticky="top" className="bg-white" expand="lg"> 
   
    <Container> 
    
      <Navbar.Toggle aria-controls="basic-navbar-nav"
      data-toggle="mynav"
      />

      <Navbar.Collapse className="basic-navbar-nav mynav">  
        <Navbar.Collapse className="ms-100"/>  
          <Nav.Link className="pb-10" href="#home">Shop</Nav.Link>  
          <Nav.Link className="pt-1000" href="#home">About Us</Nav.Link>  
          <Nav.Link href="#home">Contact Us</Nav.Link>  
          <Nav.Link href="#home">My account</Nav.Link>  
          </Navbar.Collapse>
      </Container>
    
      <Nav.Link href="#home" className="ms-10">Menu</Nav.Link>
     
      </Navbar>

)




export default Sidebar;


