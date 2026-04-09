import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PartnerWithUs = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa',  display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
            
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Partner with VASUDHEVA Media
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                We collaborate with institutions, organizations and individuals to design, build and evolve meaningful media, communication and knowledge systems.
              </p>
              <p className="text-muted mt-3">Not short-term engagements, but long-term alignment.</p>
              <div className="mt-5">
                <Button as={Link} to="/contact" variant="dark" className="me-3">Explore Partnership Models</Button>
                <Button as={Link} to="/contact" variant="outline-dark">Initiate Partnership</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT PARTNERSHIP MEANS */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What partnership means to us</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            Partnership is a shared journey of building, long-term alignment of purpose, and collaborative creation of value.
          </p>
        </Container>
      </section>

      {/* WHY PARTNER WITH US */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Why institutions choose to partner with us</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Integrated Capability</h5><p className="small">Research, strategy, narrative, media production and communication systems</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Intellectual Depth</h5><p className="small">Research-driven thinking and structured frameworks</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Long-Term Orientation</h5><p className="small">System-building approach and institutional thinking</p></Card></Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready for long-term alignment?</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Initiate Partnership</Button>
            <Button as={Link} to="/collaborate" variant="outline-light" size="lg">Back to Collaborate</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PartnerWithUs;