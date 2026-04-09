import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Frameworks = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa',  display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              {/* <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>Frameworks &amp; Models</p> */}
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Frameworks and models for media, communication and institutional thinking
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                A collection of structured frameworks, conceptual models and analytical systems designed to simplify complexity and support decision-making.
              </p>
              <p className="text-muted mt-3">From ideas to systems. From thinking to application.</p>
              <div className="mt-5">
                <Button as={Link} to="/insights/frameworks" variant="dark" className="me-3">Explore Frameworks</Button>
                <Button as={Link} to="#categories" variant="outline-dark">View Models</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT FRAMEWORKS ARE */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What you will find here</h2>
          <Row className="g-4 justify-content-center">
            <Col md={8}>
              <p className="lead text-center">
                Conceptual frameworks, analytical models, structured thinking tools and system representations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FEATURED FRAMEWORKS */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Featured Frameworks</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Communication System Architecture Model</h5>
                <p className="small text-muted">Communication Strategy</p>
                <p className="small">A structured model that maps how communication flows within and outside an institution.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Narrative Design Framework</h5>
                <p className="small text-muted">Narrative and Storytelling</p>
                <p className="small">A system for constructing narratives that align with institutional identity and goals.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Media Ecosystem Mapping Model</h5>
                <p className="small text-muted">Media Systems</p>
                <p className="small">A model that maps media platforms, content flows, audience behavior and distribution systems.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Knowledge Flow and Dissemination Model</h5>
                <p className="small text-muted">Knowledge Systems</p>
                <p className="small">A conceptual model explaining how knowledge is created, structured and communicated.</p>
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
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Communication Frameworks</h5><p className="small">Models for structuring communication systems</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Narrative and Storytelling Models</h5><p className="small">Frameworks for designing narratives</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Media Systems</h5><p className="small">Models for media ecosystems</p></Card></Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready to apply structured thinking?</h2>
          <div className="mt-5">
            <Button as={Link} to="/insights/frameworks" variant="light" size="lg" className="me-3">Explore All Frameworks</Button>
            <Button as={Link} to="/insights" variant="outline-light" size="lg">Back to Insights</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Frameworks;