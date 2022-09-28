import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className="fw-bold" href="/About">
              About
            </Nav.Link>

            <NavDropdown
              className="fw-bold"
              title="Services"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/Alibaba_import">
                Import from Alibaba
              </NavDropdown.Item>
              <NavDropdown.Item href="/Customs_consulting">
                Customs Consulting
              </NavDropdown.Item>
              <NavDropdown.Item href="/Cargo_insurance">
                Cargo Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="/Isf_filing">ISF Filing</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="fw-bold"
              title="Forms"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/Files">
                Commercial Shipments
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Household Goods
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="fw-bold" href="/Faqs">
              FAQs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
