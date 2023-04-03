import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function RedBusNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
       <Image src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"/>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="ms-2">Bus Tickets</Nav.Link>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RedBusNavbar;