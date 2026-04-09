import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PartnershipInquiry = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              {/* <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>Partnership Inquiry</p> */}
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Partner with VASUDHEVA Media
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                We collaborate with institutions, organisations and individuals to co-create meaningful media, design communication systems, build intellectual capital and develop long-term initiatives.
              </p>
              <p className="text-muted mt-3">Partnerships are not transactions. They are aligned, thoughtful and evolving relationships.</p>
              <div className="mt-5">
                <Button as={Link} to="/contact" variant="dark" className="me-3">Submit Partnership Inquiry</Button>
                <Button as={Link} to="/contact" variant="outline-dark">Understand Partnership Types</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT PARTNERSHIP MEANS */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What we mean by partnership</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            Alignment of purpose, integration of capabilities, co-creation of value, and long-term relationship.
          </p>
        </Container>
      </section>

      {/* TYPES */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Partnership models</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Strategic Partnerships</h5><p className="small">Long-term collaboration and joint initiatives</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Media Collaborations</h5><p className="small">Co-creation of content and media properties</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Knowledge Partnerships</h5><p className="small">Research, publications and frameworks</p></Card></Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready to explore a meaningful partnership?</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Submit Partnership Inquiry</Button>
            <Button as={Link} to="/collaborate" variant="outline-light" size="lg">Back to Collaborate</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PartnershipInquiry;