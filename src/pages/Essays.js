import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Essays = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa',  display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              {/* <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>Essays &amp; Perspectives</p> */}
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Essays, reflections and perspectives on media, communication and society
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                A collection of long-form essays that explore ideas, meanings, systems and relationships — written with depth, reflection and philosophical grounding.
              </p>
              <p className="text-muted mt-3">Writing that does not just explain, but interprets.</p>
              <div className="mt-5">
                <Button as={Link} to="/insights/essays" variant="dark" className="me-3">Explore Essays</Button>
                <Button as={Link} to="#themes" variant="outline-dark">Browse Themes</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT ESSAYS ARE */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What you will find here</h2>
          <Row className="g-4 justify-content-center">
            <Col md={8}>
              <p className="lead text-center">
                Reflective writing, interpretative essays, conceptual exploration and philosophical inquiry.
              </p>
              <ul className="list-unstyled text-center mt-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li className="mb-2">• thoughtful explorations of ideas</li>
                <li className="mb-2">• interpretations of systems and realities</li>
                <li className="mb-2">• exploratory, layered and deeply reflective</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FEATURED ESSAYS */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Featured Essays</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Media, Meaning and Modern Society</h5>
                <p className="small text-muted">Culture and Society</p>
                <p className="small">An exploration of how media shapes not just information, but meaning, perception and collective consciousness.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>The Nature of Communication in Institutions</h5>
                <p className="small text-muted">Institutional Thinking</p>
                <p className="small">A reflection on how communication operates within institutions — not merely as messaging, but as identity, structure and influence.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Knowledge in the Age of Information</h5>
                <p className="small text-muted">Knowledge Systems</p>
                <p className="small">An interpretative essay on the difference between information, knowledge and understanding.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Narrative as a Tool of Power and Understanding</h5>
                <p className="small text-muted">Narrative</p>
                <p className="small">A deep exploration of how narratives shape both perception and reality.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* THEMES */}
      <section id="themes" className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Themes of reflection</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Media and Meaning</h5><p className="small">Exploring how media shapes perception and reality</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Communication and Power</h5><p className="small">Understanding communication as influence and structure</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Culture and Society</h5><p className="small">Reflections on social systems and cultural dynamics</p></Card></Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready for deep thinking?</h2>
          <div className="mt-5">
            <Button as={Link} to="/insights/essays" variant="light" size="lg" className="me-3">Explore All Essays</Button>
            <Button as={Link} to="/insights" variant="outline-light" size="lg">Back to Insights</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Essays;