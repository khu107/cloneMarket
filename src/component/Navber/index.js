import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../asset/img/logo.jpg';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/">
            <img src={Logo} style={{ width: '100px' }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link>
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                홈페이지
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/namjesang"
              >
                상의（남）
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/namjepaji"
              >
                바지（남）
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/yojasang"
              >
                상의（여）
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/yojapaji"
              >
                바지（여자）
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/chima"
              >
                치마
              </Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
