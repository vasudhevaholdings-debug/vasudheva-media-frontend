import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../logos/mediaLogo_transparent.png";

const Header = () => {
  return (
    <Navbar  expand="lg" sticky="top" className="shadow-sm navbar"style={{ backgroundColor: '#313938' }}>
      <Container fluid className="d-flex align-items-center justify-content-between">

        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center header-left">
          {/* Logo */}
          <img
            src={Logo}
            alt="Vasudheva Logo"
            className="header-logo me-2"
            height="60"
            width="60"
          />

          {/* Brand Text Block */}
          <div className="brand-block">
            <div className="brand-name"style={{ color: '#efc324' }}>VASUDHEVA</div>
            <div className="brand-entity"style={{ color: '#e2e5d2e3' }}>MEDIA PVT. LTD.</div>
          </div>
        </Navbar.Brand>

        {/* TOGGLE (mobile) */}
        <Navbar.Toggle />

        {/* CENTER + RIGHT */}
        <Navbar.Collapse className="justify-content-between">

          {/* CENTER: Nav links */}
          <Nav className="mx-auto text-center header-nav">
            <Nav.Link as={Link} to="/">Home</Nav.Link>   
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/what-we-do">What We Do</Nav.Link>
            <Nav.Link as={Link} to="/work">Work</Nav.Link>
            <Nav.Link as={Link} to="/insights">Insights</Nav.Link>
            <Nav.Link as={Link} to="/who-we-serve">Who We Serve</Nav.Link>
            <Nav.Link as={Link} to="/collaborate">Collaborate</Nav.Link>
          </Nav>

          {/* RIGHT: CTA */}
          <div className="d-flex justify-content-end start-btn">
            <Button 
              variant="primary" 
              className="cta-button"
              as={Link}
              to="/contact"
            >
              Start a Project
            </Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;