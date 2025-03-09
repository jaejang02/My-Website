import { Nav, Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from "react";
import { useNavigate } from "react-router-dom";
const MyNavBar = () => {
  const navigate = useNavigate();
  const handleSmoothScroll = (event) => {
    event.preventDefault();
  
    const href = event.currentTarget.getAttribute("href");
    if (!href) return;

    // ex: path = / hash = experience
    const [path, hash] = href.split("#");
  
    if (hash) {
      const scrollToElement = () => {
        // gets the tag by id
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };
      
      if (path && window.location.pathname !== path) {
        navigate(path, { replace: true });
        setTimeout(scrollToElement, 100); // Slight delay to ensure navigation happens first
      } else {
        scrollToElement();
      }
    }
  };
  return (
    <Navbar expand="lg" bg="light" fixed ='top'>
      <Container fluid>
        <Navbar.Brand className='nav-link' href="/">My Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">  {/* Aligns Nav to the right side */}
            <Nav.Link className="nav-link" href='/#aboutMe' onClick = {handleSmoothScroll}>
              About
            </Nav.Link>
            <Nav.Link className="nav-link" href='/#projects' onClick = {handleSmoothScroll}>
              Projects / Experience
            </Nav.Link>
            <Nav.Link className="nav-link" href='/resume'>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
