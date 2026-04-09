import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TrustStrip = () => {
  return (
    <section className="premium-section py-5 bg-light">
      <Container fluid className="px-4 px-lg-5">
        <Row className="justify-content-center text-center">
          <Col lg={11} xl={10}>

            {/* Trust Tags Row - Highlighted */}
            <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 mb-4">
              <div 
                className="text-uppercase fw-semibold px-3 py-2 rounded-3"
                style={{ 
                  fontSize: '0.98rem', 
                  letterSpacing: '2px',
                  color: '#1E40AF',           // Deep Blue - Highlighted
                  backgroundColor: '#EFF6FF',
                  borderBottom: '3px solid #3B82F6'
                }}
              >
                Research-backed
              </div>
              <div 
                className="text-uppercase fw-semibold px-3 py-2 rounded-3"
                style={{ 
                  fontSize: '0.98rem', 
                  letterSpacing: '2px',
                  color: '#af1ead',
                  backgroundColor: '#EFF6FF',
                  borderBottom: '3px solid #3B82F6'
                }}
              >
                Strategy-led
              </div>
              <div 
                className="text-uppercase fw-semibold px-3 py-2 rounded-3"
                style={{ 
                  fontSize: '0.98rem', 
                  letterSpacing: '2px',
                  color: '#1e9caf',
                  backgroundColor: '#EFF6FF',
                  borderBottom: '3px solid #3B82F6'
                }}
              >
                Culture-rooted
              </div>
              <div 
                className="text-uppercase fw-semibold px-3 py-2 rounded-3"
                style={{ 
                  fontSize: '0.98rem', 
                  letterSpacing: '2px',
                  color: '#f0650f',
                  backgroundColor: '#EFF6FF',
                  borderBottom: '3px solid #3B82F6'
                }}
              >
                Institution-focused
              </div>
              <div 
                className="text-uppercase fw-semibold px-3 py-2 rounded-3"
                style={{ 
                  fontSize: '0.98rem', 
                  letterSpacing: '2px',
                  color: '#ca1eb3',
                  backgroundColor: '#EFF6FF',
                  borderBottom: '3px solid #3B82F6'
                }}
              >
                Quality-driven
              </div>
            </div>

            {/* Supporting Line */}
            <p className="text-muted mb-4" style={{ fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto' }}>
              Built with seriousness, responsibility and long-term orientation.
            </p>

            {/* Quick Links */}
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <Link 
                to="/about" 
                className="text-decoration-none text-dark fw-medium small hover-underline"
              >
                Media Kit
              </Link>
              <Link 
                to="/about" 
                className="text-decoration-none text-dark fw-medium small hover-underline"
              >
                Governance and Trust
              </Link>
              <Link 
                to="/contact" 
                className="text-decoration-none text-dark fw-medium small hover-underline"
              >
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