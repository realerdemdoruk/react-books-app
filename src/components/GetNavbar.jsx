import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const GetNavbar = () => {
  return (
    <Container fluid className=" bg-light sticky-top">
      <div className="w-100 justify-content-center d-flex">
        <Navbar bg="light" expand="lg">
          <Container className="mx-auto  text-center ">
            <Nav.Link>
              <Link className="NavLink" to="/">
                <h6>Home</h6>
              </Link>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link className="NavLink" to="/readed">
                    <h6>Readed</h6>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="NavLink" to="/toread">
                    <h6>To be Read</h6>
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default GetNavbar;
