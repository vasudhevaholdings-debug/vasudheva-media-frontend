import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contributors = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa',  display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              {/* <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>Contributors</p> */}
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Contribute to VASUDHEVA Media
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                We collaborate with independent professionals, thinkers and creators to design, produce and evolve media, communication and knowledge systems.
              </p>
              <p className="text-muted mt-3">Flexible collaboration. Structured thinking. Meaningful work.</p>
              <div className="mt-5">
                <Button as={Link} to="/contact" variant="dark" className="me-3">Become a Contributor</Button>
                <Button as={Link} to="/contact" variant="outline-dark">Submit Profile</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT CONTRIBUTING MEANS */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What it means to be a contributor</h2>
          <Row className="g-4 justify-content-center">
            <Col md={8}>
              <p className="lead text-center">
                Contributing to VASUDHEVA Media is not isolated task execution, anonymous gig work, or volume-based production.
              </p>
              <ul className="list-unstyled text-center mt-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li className="mb-3">• participating in structured projects</li>
                <li className="mb-3">• contributing to meaningful outputs</li>
                <li className="mb-3">• engaging with ideas, systems and narratives</li>
              </ul>
              <p className="text-center mt-4">Contributors are not external resources. They are extended participants in the institutional ecosystem.</p>
            </Col>
          </Row>
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
                  <li>• have strong domain expertise</li>
                  <li>• can work independently</li>
                  <li>• value structured thinking</li>
                  <li>• can collaborate effectively</li>
                  <li>• seek meaningful work</li>
                </ul>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Suitable profiles</h5>
                <ul className="list-unstyled small">
                  <li>• freelance writers and editors</li>
                  <li>• filmmakers and video professionals</li>
                  <li>• graphic designers and visual artists</li>
                  <li>• researchers and analysts</li>
                  <li>• strategists and consultants</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* AREAS OF CONTRIBUTION */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Where you can contribute</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Writing and Editorial</h5><p className="small">Articles, essays, reports, scripts</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Research and Analysis</h5><p className="small">Domain research, data interpretation, framework development</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Media Production</h5><p className="small">Video production, filming, editing</p></Card></Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready to contribute meaningfully?</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Submit Your Profile</Button>
            <Button as={Link} to="/collaborate" variant="outline-light" size="lg">Back to Collaborate</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contributors;