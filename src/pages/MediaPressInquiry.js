import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MediaPressInquiry = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
            
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Media and press inquiries
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                We engage with media platforms, journalists and institutions to contribute ideas, participate in discussions, and share perspectives on media, communication and society.
              </p>
              <p className="text-muted mt-3">Our media engagement is selective, thoughtful and aligned with our institutional philosophy.</p>
              <div className="mt-5">
                <Button as={Link} to="/contact" variant="dark" className="me-3">Submit Media Inquiry</Button>
                <Button as={Link} to="/contact" variant="outline-dark">View Media Resources</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* MEDIA PHILOSOPHY */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">How we approach media engagement</h2>
          <Row className="g-4 text-center">
            <Col md={3}><Card className="calm-card p-4 h-100"><strong>Clarity</strong></Card></Col>
            <Col md={3}><Card className="calm-card p-4 h-100"><strong>Responsibility</strong></Card></Col>
            <Col md={3}><Card className="calm-card p-4 h-100"><strong>Depth</strong></Card></Col>
            <Col md={3}><Card className="calm-card p-4 h-100"><strong>Alignment</strong></Card></Col>
          </Row>
        </Container>
      </section>

      {/* TYPES OF INTERACTIONS */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Ways we engage</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Interviews</h5><p className="small">Print, digital, audio/video</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Expert Commentary</h5><p className="small">Media, policy discussions, knowledge platforms</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Panel Discussions / Events</h5><p className="small">Conferences, seminars, public forums</p></Card></Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready to engage thoughtfully?</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Submit Media Inquiry</Button>
            <Button as={Link} to="/contact" variant="outline-light" size="lg">Back to Contact</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MediaPressInquiry;