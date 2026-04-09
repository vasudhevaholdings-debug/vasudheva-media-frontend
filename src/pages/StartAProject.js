import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StartAProject = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              {/* <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>Start a Project</p> */}
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Start a project with VASUDHEVA Media
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                Let’s design something meaningful together.
              </p>
              {/* <p className="text-muted mt-3">This page is for serious project inquiries.</p> */}
              <div className="mt-5">
                <Button as={Link} to="/contact" variant="dark" className="me-3">Begin Project Submission</Button>
                <Button as={Link} to="/book-a-consultation" variant="outline-dark">Book a Consultation</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT THIS PAGE IS */}
      {/* <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Before you begin</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            This page is designed to understand your context, structure your requirements, and enable meaningful engagement.
          </p>
        </Container>
      </section> */}

      {/* WHEN TO USE */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Is this the right place for you?</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Use this page if you</h5>
                <p className="small">Have a defined project or idea, are exploring structured communication work, and are willing to invest time and resources.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Alternative</h5>
                <p className="small">If you need initial clarity first, book a consultation instead.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready to start something meaningful?</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Begin Project Submission</Button>
            <Button as={Link} to="/contact" variant="outline-light" size="lg">Back to Contact</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default StartAProject;