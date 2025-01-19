import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../assets/images/contra-logo.png";

const ContraNavBar = () => {
  return (
    <Navbar expand="lg" className="cg-navbar ">
      <Container className="cg-navbar-container">
        <Navbar.Brand href="/">
          <div className="cg-logo">
            <img src={Logo} alt="Contra Group Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="cg-navbar-link">
          <Nav className="me-auto">
            <Nav.Link className="cg-nav-link" href="/">
              Ana Sayfa
            </Nav.Link>
            <Nav.Link className="cg-nav-link" href="institutional">
              Kurumsal
            </Nav.Link>
            <Nav.Link className="cg-nav-link" href="capabilities">
              Faaliyet Alanları
            </Nav.Link>
            <Nav.Link className="cg-nav-link" href="innovation">
              Arge İnovasyon
            </Nav.Link>
            <Nav.Link className="cg-nav-link" href="home">
              İletişim
            </Nav.Link>
            {/* <Nav.Link className="cg-nav-link" href="home">
              Medya
            </Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ContraNavBar;
