import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Internship = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa',  display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Learn, think and build with VASUDHEVA Media
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                Structured programs for individuals who want to develop intellectual clarity, understand media and communication, and engage with real-world projects.
              </p>
              <p className="text-muted mt-3">Not just internships. A process of formation.</p>
              <div className="mt-5">
                <Button as={Link} to="/contact" variant="dark" className="me-3">Explore Programs</Button>
                <Button as={Link} to="/contact" variant="outline-dark">Apply Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* LEARNING PHILOSOPHY */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">How we think about learning</h2>
          <Row className="g-4 justify-content-center">
            <Col md={8}>
              <p className="lead text-center">
                Learning at VASUDHEVA Media is active, reflective, applied and continuous.
              </p>
              <ul className="list-unstyled text-center mt-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li className="mb-2">• Learn by working on real problems</li>
                <li className="mb-2">• Learn by engaging with ideas</li>
                <li className="mb-2">• Learn by receiving structured feedback</li>
                <li className="mb-2">• Learn by iterating</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PROGRAM STRUCTURE */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Programs</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Internships</h5>
                <p className="small">4–12 weeks • Exposure • Learning • Foundational participation</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Fellowships</h5>
                <p className="small">Longer engagement • Deeper contribution • Research and project ownership</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready to grow through real work?</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Apply Now</Button>
            <Button as={Link} to="/collaborate" variant="outline-light" size="lg">Back to Collaborate</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Internship;