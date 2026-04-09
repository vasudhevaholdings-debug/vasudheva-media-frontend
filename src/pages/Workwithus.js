import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WorkWithUs = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa',  display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
             
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Work with VASUDHEVA Media
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                Build, think and create within an evolving institution at the intersection of media, communication, culture and knowledge.
              </p>
              <p className="text-muted mt-3">“This is not employment. This is participation in an institutional project.”</p>
              <div className="mt-5">
                <Button as={Link} to="/contact" variant="dark" className="me-3">Explore Roles</Button>
                <Button as={Link} to="/contact" variant="outline-dark">Apply Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WORK PHILOSOPHY */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">How we think about work</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            Work at VASUDHEVA Media is intellectual and creative participation in building systems, narratives and institutions.
          </p>
        </Container>
      </section>

      {/* WHO SHOULD APPLY */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Who this is for</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>We invite individuals who</h5>
                <ul className="list-unstyled small">
                  <li>• Think deeply about ideas, communication and society</li>
                  <li>• Value clarity over noise</li>
                  <li>• Can operate across thinking and execution</li>
                  <li>• Seek long-term intellectual growth</li>
                </ul>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Functional areas</h5>
                <ul className="list-unstyled small">
                  <li>• Research and Strategy</li>
                  <li>• Narrative and Editorial</li>
                  <li>• Media Production</li>
                  <li>• Design and Visual Communication</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready to participate in something meaningful?</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Apply Now</Button>
            <Button as={Link} to="/collaborate" variant="outline-light" size="lg">Back to Collaborate</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WorkWithUs;