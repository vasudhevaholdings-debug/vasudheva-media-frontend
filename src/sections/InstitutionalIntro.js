import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import VasudhevaImage from '../logos/what_media.png'; 

const InstitutionalIntro = () => {
  return (
    <section className="premium-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={9}>

            {/* Section Heading */}
            <h2 className="section-heading text-center mb-4">
              What is VASUDHEVA Media?
            </h2>

            {/* Core Paragraph + Bullet List */}
            <p className="lead text-center mx-auto mb-4" style={{ maxWidth: '860px', fontSize: '1.15rem' }}>
              VASUDHEVA Media is not a conventional agency, production house or content vendor.<br />
              It is a media and communication institution in the making — one that combines creative 
              production, strategic thinking, cultural awareness and knowledge translation into a unified practice.
            </p>

            <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '860px', fontSize: '1.15rem' }}>
              At its core, it operates simultaneously as:
            </p>

            <Row className="align-items-center">

              {/* Left Side - Original Content */}
              <Col lg={7} md={12}>
                <Row className="justify-content-center mb-5">
                  <Col md={10}>
                    <ul 
                      className="list-unstyled" 
                      style={{ 
                        fontSize: '1.1rem', 
                        lineHeight: '1.8',
                        paddingLeft: '20px'
                      }}
                    >
                      <li className="mb-3">• A media company that creates films, formats and communication outputs</li>
                      <li className="mb-3">• A communication partner that designs narratives and public positioning</li>
                      <li className="mb-3">• A cultural enterprise that engages with identity, memory and meaning</li>
                      <li className="mb-3">• A knowledge platform that translates ideas into accessible and powerful media</li>
                      <li className="mb-3">• And an intellectual property builder that develops long-term media and narrative assets</li>
                    </ul>
                  </Col>
                </Row>

                {/* Contrast Line (Tertiary Trust Line) */}
                
              </Col>

              {/* Right Side - Image */}
              <Col lg={5} md={12}>
                <img 
                  src={VasudhevaImage}
                  alt="Vasudheva Media"
                  className="img-fluid "
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    minHeight: '450px',
                    objectFit: 'cover',
                    borderRadius: '20px'
                  }}
                />
              </Col>

            </Row>
            <div className="text-center mb-5 mt-4">
                  <p 
                    className="text-muted fw-light text-uppercase mx-auto" 
                    style={{ 
                      letterSpacing: '6px', 
                      fontSize: '1.1rem',
                      opacity: 0.85 
                    }}
                  >
                    Not just an agency. Not just a production studio.<br />
                    A serious media and communication institution.
                  </p>
                </div>
            {/* CTA Links */}
            <div className="text-center">
              <Button 
                as={Link} 
                to="/about" 
                variant="dark" 
                size="lg" 
                className="me-3 mb-3 mb-md-0"
              >
                Learn About Us
              </Button>
              <Button 
                as={Link} 
                to="/about" 
                variant="outline-dark" 
                size="lg"
              >
                Read Our Philosophy
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InstitutionalIntro;