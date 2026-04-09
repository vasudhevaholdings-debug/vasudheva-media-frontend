import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="gy-4">

          {/* Column 1 — Company */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li className="mb-2"><Link to="/philosophy" className="text-light text-decoration-none">Philosophy</Link></li>
              <li className="mb-2"><Link to="/why-exist" className="text-light text-decoration-none">Why We Exist</Link></li>
              <li className="mb-2"><Link to="/vision-mission-values" className="text-light text-decoration-none">Vision, Mission & Values</Link></li>
              <li className="mb-2"><Link to="/leadership" className="text-light text-decoration-none">Leadership</Link></li>
              <li className="mb-2"><Link to="/governance" className="text-light text-decoration-none">Governance and Trust</Link></li>
            </ul>
          </Col>

          {/* Column 2 — What We Do */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3">What We Do</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/domains" className="text-light text-decoration-none">Domains</Link></li>
              <li className="mb-2"><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
              <li className="mb-2"><Link to="/who-we-serve" className="text-light text-decoration-none">Who We Serve</Link></li>
              <li className="mb-2"><Link to="/work" className="text-light text-decoration-none">Work</Link></li>
              <li className="mb-2"><Link to="/formats" className="text-light text-decoration-none">Formats</Link></li>
              <li className="mb-2"><Link to="/process" className="text-light text-decoration-none">Our Process</Link></li>
            </ul>
          </Col>

          {/* Column 3 — Insights */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3">Insights</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/articles" className="text-light text-decoration-none">Articles</Link></li>
              <li className="mb-2"><Link to="/essays" className="text-light text-decoration-none">Essays</Link></li>
              <li className="mb-2"><Link to="/reports" className="text-light text-decoration-none">Reports</Link></li>
              <li className="mb-2"><Link to="/frameworks" className="text-light text-decoration-none">Frameworks</Link></li>
            </ul>
          </Col>

          {/* Column 4 — Collaborate */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3">Collaborate</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/partner-with-us" className="text-light text-decoration-none">Partner With Us</Link></li>
              <li className="mb-2"><Link to="/work-with-us" className="text-light text-decoration-none">Work With Us</Link></li>
              <li className="mb-2"><Link to="/contributors" className="text-light text-decoration-none">Contributors</Link></li>
              <li className="mb-2"><Link to="/internships-and-fellowships" className="text-light text-decoration-none">Internships& Fellowships</Link></li>
            </ul>
          </Col>

          {/* Column 5 — Contact & Trust */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3">Contact &amp; Trust</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/start-a-project" className="text-light text-decoration-none">Start a Project</Link></li>
              <li className="mb-2"><Link to="/book-a-consultation" className="text-light text-decoration-none">Book a Consultation</Link></li>
              <li className="mb-2"><Link to="/partnership-inquiries" className="text-light text-decoration-none">Partnership Enquiries</Link></li>
              <li className="mb-2"><Link to="/media-press-inquiries" className="text-light text-decoration-none">Media/Press Inquiries</Link></li>
             
            </ul>
          </Col>

        </Row>

        <hr className="my-5 border-secondary" />

        {/* Bottom Bar */}
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="small mb-0">
              © 2026 VASUDHEVA Media Private Limited. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="small mb-0 text-light" style={{ letterSpacing: '3px', opacity: 0.75 }}>
              Media. Communication. Culture. Knowledge.
            </p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;