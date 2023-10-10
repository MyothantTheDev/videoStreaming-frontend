import React from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap';

const NavSection = () => {
    return (
    <header id='navigation'>
      <Navbar expand="lg" className="bg-black-blur">
        <Container fluid>
          <Navbar.Brand href="#home" className='font-simibold'>Linn Accounting Service</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Work</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <Nav.Link href="/login" className='button'>
                <span className='actual-text'>&nbsp;log in&nbsp;</span>
                <span className='hover-text' aria-hidden='true'>&nbsp;log in&nbsp;</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    )
}

export default NavSection;