import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

const GetNavbar = () => {
  return (
    <Container fluid className=" bg-white sticky-top">
      <div className="w-100 justify-content-center d-flex">
        <Navbar bg="white" expand="lg">
          <Container className="mx-auto  text-center ">
            <Nav.Link>
              <Link
                className="NavLink"
                to="/"
                style={{ textDecoration: 'none' }}
              >
                <h6>Ana Sayfa</h6>
              </Link>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link
                    className="NavLink"
                    to="/readed"
                    style={{ textDecoration: 'none' }}
                  >
                    <h6>Okunanlar</h6>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="NavLink" to="/toread">
                    <AiOutlineHeart />
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
