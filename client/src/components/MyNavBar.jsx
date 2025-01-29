import { Nav, Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function MyNavBar() {
  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand className='home-button' href="/">My Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">  {/* Aligns Nav to the right side */}
            <Nav.Link className="nav-link" href='/projects'>
              Projects / Experience
            </Nav.Link>
            <Nav.Link className="nav-link">
              Hobbies
            </Nav.Link>
            <Nav.Link className = "nav-link" href='/resume'>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
