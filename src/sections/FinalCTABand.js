import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FinalCTABand = () => {
  return (
    <section className="premium-section text-center  text-dark py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>

            {/* Main Heading */}
            <h2 className="section-heading text-dark mb-4" style={{ fontSize: '2.4rem' }}>
              Let’s build meaningful media and communication systems together.
            </h2>

            {/* Supporting Text */}
            <p className="lead mb-5 mx-auto" style={{ maxWidth: '720px', opacity: 0.9 }}>
              If you are an institution, founder, organisation or individual seeking<br />
              clarity, depth and responsible communication — we would be glad to engage.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {/* Primary CTA */}
              <Button 
                as={Link} 
                to="/contact" 
                variant="dark" 
                size="lg" 
                className="px-5"
              >
                Start a Project
              </Button>

              {/* Secondary CTA */}
              <Button 
                as={Link} 
                to="/contact" 
                variant="outline-dark" 
                size="lg" 
                className="px-5"
              >
                Book a Consultation
              </Button>

              {/* Optional CTA */}
              <Button 
                as={Link} 
                to="/collaborate" 
                variant="outline-dark" 
                size="lg" 
                className="px-5"
              >
                Partner With Us
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FinalCTABand;