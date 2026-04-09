import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa',  display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
             
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Structured writing on media, communication, culture and knowledge
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                A collection of articles that explore ideas, concepts, systems and practices — written with clarity, depth and structure.
              </p>
              <p className="text-muted mt-3">Not content for consumption, but thinking for understanding.</p>
              <div className="mt-5">
                <Button as={Link} to="/insights/articles" variant="dark" className="me-3">Explore Articles</Button>
                <Button as={Link} to="#categories" variant="outline-dark">Browse Categories</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT ARTICLES ARE */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What you will find here</h2>
          <Row className="g-4 justify-content-center">
            <Col md={8}>
              <p className="lead text-center">
                This section is dedicated to structured articles, analytical writing, conceptual explanations and applied thinking.
              </p>
              <ul className="list-unstyled text-center mt-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li className="mb-2">• thoughtful, structured and purposeful writing</li>
                <li className="mb-2">• grounded in research, observation and conceptual clarity</li>
                <li className="mb-2">• explanatory, analytical, conceptual and applied</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Featured Articles</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Understanding Media as a System</h5>
                <p className="small text-muted">Media Systems</p>
                <p className="small">An exploration of media not as content production, but as an interconnected system of creation, distribution and influence.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>What is Strategic Communication?</h5>
                <p className="small text-muted">Communication Strategy</p>
                <p className="small">A structured explanation of communication beyond messaging — as a strategic, institutional function.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>The Role of Narrative in Institutions</h5>
                <p className="small text-muted">Institutional Thinking</p>
                <p className="small">How narratives shape perception, identity and long-term institutional positioning.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Knowledge, Communication and Society</h5>
                <p className="small text-muted">Knowledge Systems</p>
                <p className="small">The relationship between knowledge creation, communication and societal evolution.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Explore by category</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Media Systems</h5><p className="small">Understanding media structures, formats and ecosystems</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Communication Strategy</h5><p className="small">Strategic thinking in communication and messaging</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Culture and Society</h5><p className="small">Intersections of media, culture and social systems</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Knowledge Systems</h5><p className="small">Creation, organization and dissemination of knowledge</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Institutional Thinking</h5><p className="small">How organizations think, communicate and evolve</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Narrative and Storytelling</h5><p className="small">Structure and power of narratives</p></Card></Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready to engage with structured thinking?</h2>
          <div className="mt-5">
            <Button as={Link} to="/insights/articles" variant="light" size="lg" className="me-3">Explore All Articles</Button>
            <Button as={Link} to="/insights" variant="outline-light" size="lg">Back to Insights</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Articles;