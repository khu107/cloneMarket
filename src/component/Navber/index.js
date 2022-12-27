import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../asset/img/logo.jpg';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} style={{ width: '100px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">홈페이지</Nav.Link>
            <Nav.Link href="#action2">상의（남）</Nav.Link>
            <Nav.Link href="#action2">바지（남）</Nav.Link>
            <Nav.Link href="#action2">상의（여）</Nav.Link>
            <Nav.Link href="#action2">바지（여）</Nav.Link>
            <Nav.Link href="#action2">치마</Nav.Link>
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
