import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Insights = () => {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section 
        className="premium-section text-center" 
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1E2937 100%)',
          minHeight: '75vh', 
          display: 'flex', 
          alignItems: 'center',
          color: 'white'
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem', color: '#E0F2FE' }}>
                Ideas, frameworks and public thinking<br />on media, communication, culture and society
              </h1>
              <p className="lead mx-auto mb-4" style={{ maxWidth: '720px', color: '#CBD5E1' }}>
                VASUDHEVA Media's Insights is a structured editorial and knowledge space where we write, reflect and publish on the systems that shape communication, institutions, narratives and public understanding.
              </p>
              <p className="fw-medium" style={{ letterSpacing: '1px', color: '#67E8F9' }}>
                Not content for consumption, but thinking for understanding.
              </p>
              <div className="mt-5">
                <Button as={Link} to="#featured" variant="light" size="lg" className="me-3">Explore Articles</Button>
                <Button as={Link} to="#" variant="outline-light" size="lg">Read Reports and Frameworks</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — WHAT THIS SECTION IS ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#F8FAFC' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>
            What you will find here
          </h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px', color: '#334155' }}>
            The Insights section of VASUDHEVA Media is not a blog, not a content marketing stream, and not a news feed.<br />
            It is a structured editorial system designed to:
          </p>

          <Row className="g-4 justify-content-center mb-5">
            <Col md={8}>
              <ul className="list-unstyled text-start" style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
                <li className="mb-3">• Think deeply about media, communication and society</li>
                <li className="mb-3">• Articulate ideas in clear and accessible ways</li>
                <li className="mb-3">• Build knowledge that can inform institutions, creators and the public</li>
                <li className="mb-3">• Contribute to long-term intellectual and cultural discourse</li>
              </ul>
            </Col>
          </Row>

          <p className="lead text-center mx-auto" style={{ maxWidth: '800px', color: '#334155' }}>
            This space exists because meaningful communication cannot emerge without meaningful thinking.<br />
            We write to clarify complexity, build conceptual understanding, connect theory with practice, and document evolving ideas.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — FEATURED INSIGHTS ==================== */}
      <section id="featured" className="premium-section" style={{ backgroundColor: '#0F172A', color: 'white' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#E0F2FE' }}>Featured Insights</h2>
          <p className="text-center lead mb-5" style={{ color: '#CBD5E1' }}>
            A curated selection of our most important and representative thinking.
          </p>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="p-4">
                  <h5 style={{ color: '#67E8F9' }}>Reimagining Communication in an Age of Noise</h5>
                  <p className="small text-muted mb-2">Article</p>
                  <p className="small" style={{ color: '#CBD5E1' }}>
                    An exploration of how contemporary communication systems prioritise visibility over meaning, and what it takes to build clarity-driven communication in institutions.
                  </p>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-3">Read Article</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="p-4">
                  <h5 style={{ color: '#67E8F9' }}>From Content to Systems: A Framework for Institutional Media</h5>
                  <p className="small text-muted mb-2">Framework</p>
                  <p className="small" style={{ color: '#CBD5E1' }}>
                    A structured model explaining how organisations can move from fragmented content production to integrated media and communication systems.
                  </p>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-3">Explore Framework</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="p-4">
                  <h5 style={{ color: '#67E8F9' }}>Cultural Narratives and Public Memory</h5>
                  <p className="small text-muted mb-2">Essay</p>
                  <p className="small" style={{ color: '#CBD5E1' }}>
                    A reflection on how storytelling shapes collective identity, cultural continuity and the way societies understand themselves.
                  </p>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-3">Read Essay</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="p-4">
                  <h5 style={{ color: '#67E8F9' }}>Communication Strategy for Educational Institutions</h5>
                  <p className="small text-muted mb-2">Report</p>
                  <p className="small" style={{ color: '#CBD5E1' }}>
                    A research-based report outlining communication challenges and strategic opportunities for schools, colleges and universities.
                  </p>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-3">Read Report</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="text-center mt-5">
            <Button as={Link} to="#" variant="light" size="lg">Explore All Insights</Button>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 5 — EDITORIAL STREAMS ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#F8FAFC' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>Editorial Streams</h2>
          <p className="text-center lead mb-5" style={{ color: '#334155' }}>
            Our thinking is organised into structured editorial streams to help you navigate ideas effectively.
          </p>

          <Row className="g-4">
            {[
              { title: "Articles", desc: "Clear, structured explorations of ideas, systems and practices in media and communication." },
              { title: "Essays and Perspectives", desc: "Reflective writing that interprets culture, society and evolving narratives." },
              { title: "Reports and White Papers", desc: "Research-backed, data-informed and structured analytical outputs." },
              { title: "Frameworks and Models", desc: "Conceptual tools designed to simplify complexity and guide application." },
              { title: "Media Notes and Commentary", desc: "Short-form reflections on current trends, shifts and developments." },
              { title: "Culture and Society", desc: "Writing on identity, memory, culture and social systems." }
            ].map((stream, i) => (
              <Col md={4} key={i}>
                <Card className="h-100 border-0 shadow-sm text-center p-4" style={{ backgroundColor: '#1E2937', color: 'white' }}>
                  <Card.Body>
                    <h5 style={{ color: '#67E8F9' }}>{stream.title}</h5>
                    <p className="small" style={{ color: '#CBD5E1' }}>{stream.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">If these ideas resonate, let’s work together</h2>
          <p className="lead mt-3 mb-5" style={{ maxWidth: '680px', margin: '0 auto', color: '#CBD5E1' }}>
            VASUDHEVA Media works with institutions, organisations and individuals who take communication, knowledge and narrative seriously.
          </p>
          <div>
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Start a Project</Button>
            <Button as={Link} to="/collaborate" variant="outline-light" size="lg">Collaborate With Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Insights;