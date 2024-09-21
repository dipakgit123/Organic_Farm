import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";

const Navbar1 = () => {
  return (
       <Navbar expand="lg" className="bg-success sticky-top">
      <Container>
        <img src={`${process.env.PUBLIC_URL}/logo-no-background.png`}  style={{height:"40px",width:"80px",borderRadius:"10px",marginLeft:"-10px"}}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="me-auto NavItems">
            <Nav.Link className='text-white' href="/">Home</Nav.Link>
            <Nav.Link className='text-white' href="/about">About</Nav.Link>
            <Nav.Link className='text-white' href="/community">Community</Nav.Link>
            <Nav.Link className='text-white' href="/services">Services</Nav.Link>
            <Nav.Link className='text-white' href="/contact">Contact</Nav.Link>
          </Nav>
           <Nav.Link href='/signin' className='bg-warning text-white p-1 rounded text-center  btns'>Sign In</Nav.Link>
          <Nav.Link href='/signup' className=' bg-warning text-white p-1 rounded text-center  btns'>Sign Up</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar1
