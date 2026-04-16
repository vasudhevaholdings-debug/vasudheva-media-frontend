import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-5">
      <Container fluid className="px-4 px-lg-5">   

        <Row className="g-5">   

          {/* Column 1 — Company */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="footer-link">About</Link></li>
              <li className="mb-2"><Link to="/philosophy" className="footer-link">Philosophy</Link></li>
              <li className="mb-2"><Link to="/why-exist" className="footer-link">Why We Exist</Link></li>
              <li className="mb-2"><Link to="/vision-mission-values" className="footer-link">Vision, Mission & Values</Link></li>
              <li className="mb-2"><Link to="/leadership" className="footer-link">Leadership</Link></li>
              <li className="mb-2"><Link to="/governance" className="footer-link">Governance and Trust</Link></li>
            </ul>
          </Col>

          {/* Column 2 — What We Do */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3">What We Do</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/domains" className="footer-link">Domains</Link></li>
              <li className="mb-2"><Link to="/services" className="footer-link">Services</Link></li>
              <li className="mb-2"><Link to="/who-we-serve" className="footer-link">Who We Serve</Link></li>
              <li className="mb-2"><Link to="/work" className="footer-link">Work</Link></li>
              <li className="mb-2"><Link to="/formats" className="footer-link">Formats</Link></li>
              <li className="mb-2"><Link to="/process" className="footer-link">Our Process</Link></li>
            </ul>
          </Col>

          {/* Column 3 — Insights */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3">Insights</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/articles" className="footer-link">Articles</Link></li>
              <li className="mb-2"><Link to="/essays" className="footer-link">Essays</Link></li>
              <li className="mb-2"><Link to="/reports" className="footer-link">Reports</Link></li>
              <li className="mb-2"><Link to="/frameworks" className="footer-link">Frameworks</Link></li>
            </ul>
          </Col>

          {/* Column 4 — Collaborate */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3">Collaborate</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/partner-with-us" className="footer-link">Partner With Us</Link></li>
              <li className="mb-2"><Link to="/work-with-us" className="footer-link">Work With Us</Link></li>
              <li className="mb-2"><Link to="/contributors" className="footer-link">Contributors</Link></li>
              <li className="mb-2"><Link to="/internships-and-fellowships" className="footer-link">Internships & Fellowships</Link></li>
            </ul>
          </Col>

          {/* Column 5 — Contact & Trust */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3">Contact &amp; Trust</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/start-a-project" className="footer-link">Start a Project</Link></li>
              <li className="mb-2"><Link to="/book-a-consultation" className="footer-link">Book a Consultation</Link></li>
              <li className="mb-2"><Link to="/partnership-inquiries" className="footer-link">Partnership Enquiries</Link></li>
              <li className="mb-2"><Link to="/media-press-inquiries" className="footer-link">Media/Press Inquiries</Link></li>
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