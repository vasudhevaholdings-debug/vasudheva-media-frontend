import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookAConsultation = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              {/* <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>Consultation</p> */}
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Book a consultation — think, clarify and design your next step
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                Structured conversations designed to help you understand your context, clarify your communication or media challenge, explore directions, and evaluate meaningful next steps.
              </p>
              <p className="text-muted mt-3">This is not a sales call. It is a thinking space.</p>
              <div className="mt-5">
                <Button as={Link} to="/contact" variant="dark" className="me-3">Book a Consultation</Button>
                <Button as={Link} to="#process" variant="outline-dark">Understand the Process</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT CONSULTATION MEANS */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What a consultation is — and what it is not</h2>
          <Row className="g-4 justify-content-center">
            <Col md={8}>
              <p className="lead text-center">A structured, focused conversation. A diagnostic and strategic discussion. A space for clarity and reflection.</p>
              <p className="text-center mt-4"><strong>It is not:</strong> a casual chat, a free brainstorming session, a generic advisory call, or a sales pitch.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHEN TO BOOK */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">When this is relevant for you</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>You are exploring something</h5>
                <p className="small">Starting a new initiative, building a brand, designing a communication strategy</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>You are facing a challenge</h5>
                <p className="small">Unclear messaging, weak engagement, fragmented communication</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT YOU GET */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What you get from a consultation</h2>
          <Row className="g-4 text-center">
            <Col md={3}><Card className="calm-card p-4 h-100"><strong>Clarity</strong><p className="small">Understanding your context</p></Card></Col>
            <Col md={3}><Card className="calm-card p-4 h-100"><strong>Structure</strong><p className="small">Organizing your thinking</p></Card></Col>
            <Col md={3}><Card className="calm-card p-4 h-100"><strong>Direction</strong><p className="small">Possible pathways</p></Card></Col>
            <Col md={3}><Card className="calm-card p-4 h-100"><strong>Perspective</strong><p className="small">External, objective view</p></Card></Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready for a thoughtful conversation?</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Book a Consultation</Button>
            <Button as={Link} to="/contact" variant="outline-light" size="lg">Back to Contact</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BookAConsultation;