import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TrustStrip = () => {
  return (
    <section className="premium-section py-4 bg-light">
      <Container fluid className="px-4 px-lg-5">
        <Row className="justify-content-center text-center">
          <Col >

            {/* Circular Joint Tags */}
            <div className="trust-tags-container">
              <div className="trust-tag">Research-backed</div>
              <div className="trust-tag">Strategy-led</div>
              <div className="trust-tag">Culture-rooted</div>
              <div className="trust-tag">Institution-focused</div>
              <div className="trust-tag">Quality-driven</div>
            </div>

            {/* Supporting Line */}
            <p className="text-muted mb-4" style={{ fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto' }}>
              Built with seriousness, responsibility and long-term orientation.
            </p>

            {/* Quick Links */}
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <Link to="/about" className="text-decoration-none text-dark fw-medium small hover-underline">
                Media Kit
              </Link>
              <Link to="/about" className="text-decoration-none text-dark fw-medium small hover-underline">
                Governance and Trust
              </Link>
              <Link to="/contact" className="text-decoration-none text-dark fw-medium small hover-underline">
                Contact
              </Link>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TrustStrip;