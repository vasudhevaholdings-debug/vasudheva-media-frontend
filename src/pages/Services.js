import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      {/* ==================== SECTION 2 — HERO ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
            
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Services as Interconnected Systems
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                We do not offer isolated tasks or deliverables.<br />
                We design, build and operate complete communication systems.
              </p>
              <div className="mt-5">
                <Button as={Link} to="/domains" variant="dark" className="me-3">Explore Domains</Button>
                <Button as={Link} to="/contact" variant="outline-dark">Start a Project</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — WHAT SERVICES MEAN ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What Services Mean at VASUDHEVA Media</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            Our services are not menu items. They are structured, research-backed systems that work together to solve complex communication challenges for institutions, ideas and organisations.
          </p>
          <p className="lead text-center mt-4">
            Every service is designed with long-term institutional value in mind.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — SERVICE ARCHITECTURE ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Three-Layer Service Architecture</h2>
          <Row className="g-4 text-center">
            <Col md={4}>
              <Card className="calm-card p-4 h-100">
                <strong>Layer 1 — Strategic Layer</strong>
                <p className="small mt-3">Research, narrative design, positioning systems and long-term communication architecture.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="calm-card p-4 h-100">
                <strong>Layer 2 — Narrative Layer</strong>
                <p className="small mt-3">Storytelling, content systems, knowledge translation and cultural intelligence.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="calm-card p-4 h-100">
                <strong>Layer 3 — Execution Layer</strong>
                <p className="small mt-3">Production, distribution, audience systems and continuous evolution.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 5 — CORE SERVICES GRID ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Our Core Services</h2>

          <Row className="g-4">
            {/* SERVICE 1 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>1. Institutional Communication Systems</h5>
                <p className="small">End-to-end design of how institutions express vision, pedagogy, values and identity through structured media and narrative systems.</p>
              </Card>
            </Col>

            {/* SERVICE 2 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>2. Strategic Narrative &amp; Positioning</h5>
                <p className="small">Research-backed narrative architecture and public positioning systems for founders, organisations and ideas.</p>
              </Card>
            </Col>

            {/* SERVICE 3 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>3. Research-Backed Media Production</h5>
                <p className="small">Films, documentaries, educational series and multimedia content created with depth, clarity and long-term relevance.</p>
              </Card>
            </Col>

            {/* SERVICE 4 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>4. Knowledge Translation &amp; Educational Media</h5>
                <p className="small">Converting complex ideas, research and institutional knowledge into accessible, structured and engaging formats.</p>
              </Card>
            </Col>

            {/* SERVICE 5 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>5. Cultural &amp; Documentary Storytelling</h5>
                <p className="small">Documenting heritage, memory, identity and contemporary culture through thoughtful media systems.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 6 — HOW WE WORK WITH SERVICES ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">How Services Are Delivered</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '700px' }}>
            Every project begins with deep understanding, moves through structured strategy, and ends with responsible execution and evolution.
          </p>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready to build a meaningful communication system?</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Start a Project</Button>
            <Button as={Link} to="/domains" variant="outline-light" size="lg">See All Domains</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;