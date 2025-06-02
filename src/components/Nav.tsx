import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../assets/images/contra-logo.png";
import { useTranslation } from 'react-i18next';
import Language from "./Language";

const ContraNavBar = () => {
  const { t } = useTranslation();


  return (
    <>
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
              {t('menu-home')}
            </Nav.Link>
            <Nav.Link className="cg-nav-link" href="institutional">
              {t('menu-institutional')}
            </Nav.Link>
            <Nav.Link className="cg-nav-link" href="capabilities">
               {t('menu-capabilities')}
            </Nav.Link>
            {/* <Nav.Link className="cg-nav-link" href="innovation">
              Arge İnovasyon
            </Nav.Link> */}
            <Nav.Link className="cg-nav-link" href="contact">
              {t('menu-contact')}
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
        <Language />

      </Container>
    </Navbar>
   
    </>

  );
};

export default ContraNavBar;
